import React from 'react';
import './ConfirmModalComponent.css';

interface ConfirmModalComponentProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModalComponent extends React.Component<ConfirmModalComponentProps> {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="modal">
          <div className="modal-content">
            <h2>Reservation</h2>
            <p className="modalText">{this.props.content}</p>
            <button className="modalButton" onClick={() => this.props.close()}>
              Close
            </button>
          </div>
        </div>
      );
    }
  }
}
