export interface AlertModel {
    alert_id: string;
    title?: string;
    state?: string;
    status_message?: string;
    description?: string;
    assignee?: string;
    urgency?: string;
    note?: string;
    project_id?: string;
    domain_id?: string;
}

export type UpdateAlertParams = AlertModel

export interface UpdateAlertStateParams {
    alerts: string[];
    state: string;
    assignee?: string;
    note?: string;
    domain_id?: string;
}
