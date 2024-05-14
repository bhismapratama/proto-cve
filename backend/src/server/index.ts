import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/hacking'
import { CVECatalogServiceHandlers } from '../proto/CVECatalog/CVECatalogService'
import { Empty } from '../proto/CVECatalog/Empty'
import { CVEs } from '../proto/CVECatalog/CVEs'
import { CVE } from '../proto/CVECatalog/CVE'
import { databaseConnection } from './controller/db.controller'
import path from 'path'
import { cveServerController } from './controller/calendar.controller'
import { Response } from '../proto/CVECatalog/Response'
import { CVEWithID } from '../proto/CVECatalog/CVEWithID'
import { CVEID } from '../proto/CVECatalog/CVEID'

const PROTO_PATH: string = "../../../protobuf/hacking.proto"
const PORT: number = 8080
const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
}

const protoBuf: protoLoader.PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options)
const grpcObj: ProtoGrpcType = (grpc.loadPackageDefinition(protoBuf) as unknown) as ProtoGrpcType
const calendarService = grpcObj.CVECatalog

const main = () => {
    databaseConnection().then(() => {
        const server = getServer()
        server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
            (err: Error | null, port: number) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                console.log(`Server started on port ${port}`)

                server.start()
            }
        )
    })
}

const getServer = () => {
    const server: grpc.Server = new grpc.Server()
    server.addService(calendarService.CVECatalogService.service, {
        'GetAllCVEs': (call: grpc.ServerUnaryCall<Empty, CVEs>, callback: grpc.sendUnaryData<CVEs>) => {
            console.log('Server success get all Data')
            cveServerController.getAll().then((cves: CVEs | undefined) => {
                callback(null, cves)
            })
        },
        'AddCVE': (call: grpc.ServerUnaryCall<CVE, Response>, callback: grpc.sendUnaryData<Response>) => {
            const cve = call.request
            console.log('Server success Create Data')
            cveServerController.createcve(cve).then((res: Response | undefined) => {
                callback(null, res)
            })
        },
        'UpdateCVE': (call: grpc.ServerUnaryCall<CVEWithID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const cve = call.request
            console.log('Server succed get all Data')
            cveServerController.updatecve(cve).then((res: Response | undefined) => {
                callback(null, res)
            })
        },
        'DeleteCVE': (call: grpc.ServerUnaryCall<CVEID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const cveId = call.request
            cveServerController.deletecve(cveId).then((res: Response | undefined) => {
                callback(null, res)
            })
        }
    } as CVECatalogServiceHandlers)
    return server
}

main()