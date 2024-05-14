import { CVE } from "../../proto/CVECatalog/CVE";
import { CVEs } from "../../proto/CVECatalog/CVEs";
import { Response } from "../../proto/CVECatalog/Response";
import { CVEID } from "../../proto/CVECatalog/CVEID";
import { collections } from "./db.controller";
import { ObjectId } from "mongodb";
import { CVEWithID } from "../../proto/CVECatalog/CVEWithID";

export class cveServerController {
    static async getAll(): Promise<CVEs | undefined> {
        try {
            const cvesDocs = await collections.cves?.find().toArray();
            const cvesData = (cvesDocs as unknown) as CVE[];
            let cves: CVEs = {
                cves: [],
            };
            cvesData.forEach((item) => {
                cves.cves?.push({
                    platform: item.platform,
                    severity: item.severity,
                    title: item.title
                })
            });
            return cves;
        } catch (err) {
            console.error("Error in getAll : \n", err);
        }
    }

    static async createcve(cve: CVE): Promise<Response | undefined> {
        try {
            const res = await collections.cves?.insertOne(cve);
            if (res) {
                const _res: Response = {
                    code: '201',
                    message: "Success creating new CVE",
                    cve: {
                        platform: cve.platform,
                        severity: cve.severity,
                        title: cve.title
                    }
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when creating new cve",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in create cve : \n", err);
        }
    }

    static async updatecve(cve: CVEWithID): Promise<Response | undefined> {
        try {
            const res = await collections.cves?.updateOne(
                {
                    _id: new ObjectId(cve.cveId?.id),
                },
                {
                    $set: cve.cve,
                }
            );
            if (res) {
                const _res: Response = {
                    code: '200',
                    message: "Success updating new cve",
                    cve: {
                        platform: cve.cve?.platform,
                        severity: cve.cve?.severity,
                        title: cve.cve?.title
                    }
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when updating new cve",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in update cve : \n", err);
        }
    }

    static async deletecve(cveId: CVEID): Promise<Response | undefined> {
        try {
            const res = await collections.cves?.deleteOne({
                _id: new ObjectId(cveId.id),
            });
            if (res) {
                const _res: Response = {
                    code: '200',
                    message: "Success deleting new cve",
                    cve: null
                };
                return _res;
            } else {
                const _res: Response = {
                    message: "Error when deleting new cve",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in delete cve : \n", err);
        }
    }
}
