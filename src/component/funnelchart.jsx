import React from 'react';
import { FunnelChart, Funnel, LabelList } from 'recharts';

const data = [
  { name: 'Leads', value: 1000 },
  { name: 'Qualified Leads', value: 600 },
  { name: 'Proposals Sent', value: 300 },
  { name: 'Negotiations', value: 150 },
  { name: 'Closed Sales', value: 50 },
];

const FunnelChartExample = () => (
  <div>
    <h3>Sales Funnel</h3>
    <FunnelChart width={730} height={250}>
      <Funnel data={data} dataKey="value" nameKey="name" stroke="#8884d8">
        <LabelList position="inside" fill="#fff" />
      </Funnel>
    </FunnelChart>
  </div>
);

export default FunnelChartExample;
