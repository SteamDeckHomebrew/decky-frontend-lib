import { JsPbMessage, OperationResponse } from "../shared";

export interface Report {
    /**
     * Generates a system report located in /tmp/steamXXXXXX (https://steamloopback.host/systemreports).
     * @throws OperationResponse
     */
    GenerateSystemReport(): Promise<SystemReportReply | OperationResponse>;

    /**
     * Saves a report in the Desktop directory.
     * @param reportId The report ID (file name) to save.
     */
    SaveToDesktop(reportId: string): Promise<OperationResponse>;

    /**
     * @param reportId The report ID (file name) to submit.
     * @todo times out ({@link Result.Timeout})
     */
    Submit(reportId: string): Promise<OperationResponse>;
}

export interface SystemReportReply extends OperationResponse {
    /**
     * If deserialized, returns {@link MsgGenerateSystemReportReply}.
     */
    reply: ArrayBuffer;
}

/**
 * CMsgGenerateSystemReportReply
 */
export interface MsgGenerateSystemReportReply extends JsPbMessage {
    /**
     * The report file name.
     */
    report_id(): string | undefined;

    set_report_id(param0: any): any;
}
