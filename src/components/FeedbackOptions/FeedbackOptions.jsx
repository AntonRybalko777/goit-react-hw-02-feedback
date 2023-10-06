import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      <button className={css.button} name="good">
        Good
      </button>
      <button className={css.button} name="neutral">
        Neutral
      </button>
      <button className={css.button} name="bad">
        Bad
      </button>
    </div>
  );
};
