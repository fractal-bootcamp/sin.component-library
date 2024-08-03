import React, { useState } from 'react';
import './alert.scss';

export enum TypeEnum {
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

export type AlertProps = {
    type: TypeEnum;
    message: string;
    dismissible?: boolean;
    timeout?: number;
    displayMultiple?: boolean;
}

const Alert: React.FC<AlertProps> = ({
    type = TypeEnum.WARNING,
    message,
    dismissible = false,
    timeout = 3000,
    displayMultiple = true
}) => {
    const [alerts, setAlerts] = useState<{ id: number, message: string, show: boolean, type: TypeEnum }[]>([]);
    const showNewToast = () => {
        if (!displayMultiple && alerts.length > 0) {
            handleDismiss(alerts[0].id);
        }
        // Create a new alert object
        const newAlert = {
            id: Date.now(),
            message: message,
            show: true,
            type: type
        };
        // Add the new alert to the beginning of the alerts array
        setAlerts(prevAlerts => [newAlert, ...prevAlerts]);

        // If the alert is not dismissible, set a timeout to dismiss it after timeout duration
        if (!dismissible) {
            setTimeout(() => handleDismiss(newAlert.id), timeout);
        }
    };

    // Function to dismiss an alert
    const handleDismiss = (id: number) => {
        // Update the show property of the alert to false
        setAlerts(prevAlerts => prevAlerts.map(alert => alert.id === id ? { ...alert, show: false } : alert));
        // After a delay, remove the alert from the alerts array
        setTimeout(() => {
            setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
        }, 400);
    };

    return (
        <>
            <button onClick={showNewToast}>Show Toast</button>
            <div className="toast-container">
                {alerts.map((alert) => (
                    <div key={alert.id} className={`${alert.type.toLowerCase()} toast ${alert.show ? 'show' : 'slide-out'}`}>
                        <span className="toast-text">{alert.message}</span>
                        {dismissible && (
                            <button className="dismiss-button" onClick={() => handleDismiss(alert.id)}>
                                &#x2715;
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Alert;
