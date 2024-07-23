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
    dismissible = true,
    timeout = 3000,
    displayMultiple = false
}) => {
    const [alerts, setAlerts] = useState<{ id: number, message: string, show: boolean, type: TypeEnum }[]>([]);
    const showNewToast = () => {
        if (!displayMultiple && alerts.length > 0) {
            handleDismiss(alerts[0].id);
        }

        const newAlert = {
            id: Date.now(),
            message: message + Date.now(),
            show: true,
            type: type
        };

        setAlerts(prevAlerts => [newAlert, ...prevAlerts]);

        if (!dismissible) {
            setTimeout(() => handleDismiss(newAlert.id), timeout);
        }
    };

    const handleDismiss = (id: number) => {
        setAlerts(prevAlerts => prevAlerts.map(alert => alert.id === id ? { ...alert, show: false } : alert));

        setTimeout(() => {
            setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
        }, 400);
    };

    return (
        <>
            <button onClick={showNewToast}>Show Toast</button>
            <div className="toast-container">
                {alerts.map((alert, index) => (
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
