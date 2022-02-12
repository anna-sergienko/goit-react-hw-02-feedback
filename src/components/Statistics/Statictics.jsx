import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>

      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>

      <StatisticsListItem>Bad: {bad}</StatisticsListItem>

      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positiveFeedbackPercentage} %
      </StatisticsListItem>
    </StatisticsList>
  );
}
