import React from 'react';
import { BtnList, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </BtnList>
  );
}

// <div className="FeedbackBox">
//   <h1>Please leave feedback</h1>
//   <div className="ButtonBox">
//     <button type="button" onClick={() => this.handleIncrement}>
//       Good
//     </button>
//     <button type="button" onClick={this.handleIncrement}>
//       Neutral
//     </button>
//     <button type="button" onClick={this.handleIncrement}>
//       Bad
//     </button>
//   </div>
// </div>
