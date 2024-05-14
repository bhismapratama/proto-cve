import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/hacking';
import path from 'path';
import { CVEID } from '../proto/CVECatalog/CVEID';
import { CVE } from '../proto/CVECatalog/CVE';
import express, { Request, Response } from 'express';
import { CVEWithID } from '../proto/CVECatalog/CVEWithID';
import authCors from '../middleware/authCors';

const PROTO_PATH: string = "../../../protobuf/hacking.proto";
const PORT: number = 8080;
const portClient = 5002

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoBuf = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options);
const grpcObj = grpc.loadPackageDefinition(protoBuf) as unknown as ProtoGrpcType;

const client = new grpcObj.CVECatalog.CVECatalogService(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
    if (err) {
        console.error(err);
        return;
    }
    onClientReady();
});

const onClientReady = () => {
    console.log(`Server running on port ${PORT} & Client running on port ${portClient}`);
    const app = express();
    app.use(authCors)
    app.use(express.json());

    app.get('/cve', (req: Request, res: Response) => {
        client.GetAllCVEs({}, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.post('/cve', (req: Request, res: Response) => {
        const createInput: CVE = req.body;
        const cve: CVE = createInput;
        client.AddCVE(cve, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.patch('/cve/:id', (req: Request, res: Response) => {
        const cve: CVEWithID = {
            cveId: {
                id: req.params.id
            },
            cve: req.body
        }

        client.UpdateCVE(cve,
            (err: any, _res: any) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.send(_res)
            }
        )
    })

    app.delete('/cve/:id', (req: Request, res: Response) => {
        const cveID: CVEID = { id: req.params.id };
        client.DeleteCVE(cveID, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.listen(portClient, () => {
        console.log("Express is started");
    });
};
