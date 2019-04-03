import _ from 'lodash';

const getPoints = (data) => {
  const source = _.head(data);
  const datapoints = source.datapoints;
  const head1 = _.head(datapoints);
  const head2 = _.head(head1);
  const columns = JSON.parse(head2);
  const keys = _.keys(columns);
  return keys.map(text => ({ text }));
};
export { getPoints };
