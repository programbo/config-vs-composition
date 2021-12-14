import Head from 'next/head'
import 'highlight.js/styles/night-owl.css'
import { MultidimensionalChart as Chart } from '../components/ChartWithChildren'
import { MultidimensionalChart } from '../components/ChartWithData'
import chart1 from '../components/ChartWithData/data/chart1'
import chart2 from '../components/ChartWithData/data/chart2'
import chart3 from '../components/ChartWithData/data/chart3'
import { Details } from '../components/Details'

export default function Home() {
  return (
    <div className="text-sky-900">
      <Head>
        <title>Config vs Composition</title>
      </Head>
      <div className="container max-w-xl px-6 py-24 mx-auto">
        <h1 className="text-3xl font-black">Charts with Children</h1>
        <Details
          type="language-jsx"
          className="mt-2"
          classes={{ summary: 'text-base tracking-normal' }}
          title="Implementation"
          data={`<Chart showLabels showValues>
  <Chart.Bar label="Albany Hospital">
    <Chart.BarSegment label="Albany Hospital mnisplaced 52 patients" value={52} color="#009FAE" />
  </Chart.Bar>
  <Chart.Bar label="Armidale-Kelmscott Memorial Hospital">
    <Chart.BarSegment
      label="Armidale-Kelmscott Memorial Hospital mnisplaced 62 patients"
      value={62}
      color="#009FAE"
    />
  </Chart.Bar>
  <Chart.Bar label="Fremantle Hospital">
    <Chart.BarSegment label="Fremantle Hospital mnisplaced 73 patients" value={73} color="#009FAE" />
  </Chart.Bar>
  <Chart.Bar label="Joondalup Health Campus">
    <Chart.BarSegment label="Joondalup Health Campus mnisplaced 32 patients" value={32} color="#009FAE" />
  </Chart.Bar>
  <Chart.Bar label="Princess Margaret Hospital">
    <Chart.BarSegment label="Princess Margaret Hospital mnisplaced 69 patients" value={69} color="#009FAE" />
  </Chart.Bar>
  <Chart.Bar label="Rockingham Hospital">
    <Chart.BarSegment label="Rockingham Hospital mnisplaced 88 patients" value={88} color="#009FAE" />
  </Chart.Bar>
  <Chart.Bar label="Royal Perth Hospital">
    <Chart.BarSegment label="Royal Perth Hospital mnisplaced 68 patients" value={68} color="#009FAE" />
  </Chart.Bar>
</Chart>

<Chart className="pt-10" showLabels showValues>
  <Chart.Bar label="Public Patient">
    <Chart.BarSegment label="19% of Public Patients went to market" value={19} color="#CCECEF" />
    <Chart.BarSegment label="81% of Public Patients went to market" value={81} color="#009FAE" />
  </Chart.Bar>
  <Chart.Bar label="Private Patient">
    <Chart.BarSegment label="27% of Private Patients had roast beef" value={27} color="#CCECEF" />
    <Chart.BarSegment label="31% of Private Patients had roast beef" value={31} color="#009FAE" />
  </Chart.Bar>
</Chart>

<Chart
  className="pt-12"
  showLabels
  headings={[
    <Chart.Heading key="mbs" value={100} label="Medicare Benefits Schedule (MBS) fee" />,
    <Chart.Heading key="gap" value={25} label="Medical Gap" showBenchmark />,
  ]}
  caption={
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Medical Benefits Schedule (MBS) fee</th>
          <th colSpan={2}>Medical Gap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fully covered</td>
          <td>75% of MBS fee paid by Medicare</td>
          <td>25% of MBS fee paid by HBF</td>
          <td colSpan={2}>25% of Medical Gap paid by HBF</td>
        </tr>
        <tr>
          <td>Known gap</td>
          <td>75% of MBS fee paid by Medicare</td>
          <td>25% of MBS fee paid by HBF</td>
          <td>12.5% of Medical Gap paid by HBF</td>
          <td>You pay 12.5% of Medical Gap</td>
        </tr>
        <tr>
          <td>No agreement / Opt out</td>
          <td>75% of MBS fee paid by Medicare</td>
          <td>25% of MBS fee paid by HBF</td>
          <td colSpan={2}>You pay 25% of Medical Gap</td>
        </tr>
      </tbody>
    </table>
  }
>
  <Chart.Bar label="Total medical cost">
    <Chart.BarSegment label="Total medical cost" value={125} color="#DEDEDE" />
  </Chart.Bar>
  <Chart.Bar label="Fully covered">
    <Chart.BarSegment label="75% paid by Medicare" value={75} color="#E6F5F7" />
    <Chart.BarSegment label="25% paid by Medicare" value={25} color="#009FAE" />
    <Chart.BarSegment label="100% of medical gap paid by HBF" value={25} color="#003959" />
  </Chart.Bar>
  <Chart.Bar label="Known gap">
    <Chart.BarSegment label="75% paid by Medicare" value={75} color="#E6F5F7" />
    <Chart.BarSegment label="25% paid by Medicare" value={25} color="#009FAE" />
    <Chart.BarSegment label="50% of medical gap paid by HBF" value={12.5} color="#003959" />
    <Chart.BarSegment label="You pay 50% of medical gap" value={12.5} color="#dedede" />
  </Chart.Bar>
  <Chart.Bar label="No agreement / Opt out">
    <Chart.BarSegment label="75% paid by Medicare" value={75} color="#E6F5F7" />
    <Chart.BarSegment label="25% paid by Medicare" value={25} color="#009FAE" />
    <Chart.BarSegment label="You pay 100% of medical gap" value={25} color="#dedede" />
  </Chart.Bar>
</Chart>
`}
        />

        <div className="flex flex-col w-full divide-y space-y-14">
          <Chart showLabels showValues>
            <Chart.Bar label="Albany Hospital">
              <Chart.BarSegment label="Albany Hospital mnisplaced 52 patients" value={52} color="#009FAE" />
            </Chart.Bar>
            <Chart.Bar label="Armidale-Kelmscott Memorial Hospital">
              <Chart.BarSegment
                label="Armidale-Kelmscott Memorial Hospital mnisplaced 62 patients"
                value={62}
                color="#009FAE"
              />
            </Chart.Bar>
            <Chart.Bar label="Fremantle Hospital">
              <Chart.BarSegment label="Fremantle Hospital mnisplaced 73 patients" value={73} color="#009FAE" />
            </Chart.Bar>
            <Chart.Bar label="Joondalup Health Campus">
              <Chart.BarSegment label="Joondalup Health Campus mnisplaced 32 patients" value={32} color="#009FAE" />
            </Chart.Bar>
            <Chart.Bar label="Princess Margaret Hospital">
              <Chart.BarSegment label="Princess Margaret Hospital mnisplaced 69 patients" value={69} color="#009FAE" />
            </Chart.Bar>
            <Chart.Bar label="Rockingham Hospital">
              <Chart.BarSegment label="Rockingham Hospital mnisplaced 88 patients" value={88} color="#009FAE" />
            </Chart.Bar>
            <Chart.Bar label="Royal Perth Hospital">
              <Chart.BarSegment label="Royal Perth Hospital mnisplaced 68 patients" value={68} color="#009FAE" />
            </Chart.Bar>
          </Chart>

          <Chart className="pt-10" showLabels showValues>
            <Chart.Bar label="Public Patient">
              <Chart.BarSegment label="19% of Public Patients went to market" value={19} color="#CCECEF" />
              <Chart.BarSegment label="81% of Public Patients went to market" value={81} color="#009FAE" />
            </Chart.Bar>
            <Chart.Bar label="Private Patient">
              <Chart.BarSegment label="27% of Private Patients had roast beef" value={27} color="#CCECEF" />
              <Chart.BarSegment label="31% of Private Patients had roast beef" value={31} color="#009FAE" />
            </Chart.Bar>
          </Chart>

          <Chart
            className="pt-12"
            showLabels
            headings={[
              <Chart.Heading key="mbs" value={100} label="Medicare Benefits Schedule (MBS) fee" />,
              <Chart.Heading key="gap" value={25} label="Medical Gap" showBenchmark />,
            ]}
            caption={
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Medical Benefits Schedule (MBS) fee</th>
                    <th colSpan={2}>Medical Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fully covered</td>
                    <td>75% of MBS fee paid by Medicare</td>
                    <td>25% of MBS fee paid by HBF</td>
                    <td colSpan={2}>25% of Medical Gap paid by HBF</td>
                  </tr>
                  <tr>
                    <td>Known gap</td>
                    <td>75% of MBS fee paid by Medicare</td>
                    <td>25% of MBS fee paid by HBF</td>
                    <td>12.5% of Medical Gap paid by HBF</td>
                    <td>You pay 12.5% of Medical Gap</td>
                  </tr>
                  <tr>
                    <td>No agreement / Opt out</td>
                    <td>75% of MBS fee paid by Medicare</td>
                    <td>25% of MBS fee paid by HBF</td>
                    <td colSpan={2}>You pay 25% of Medical Gap</td>
                  </tr>
                </tbody>
              </table>
            }
          >
            <Chart.Bar label="Total medical cost">
              <Chart.BarSegment label="Total medical cost" value={125} color="#DEDEDE" />
            </Chart.Bar>
            <Chart.Bar label="Fully covered">
              <Chart.BarSegment label="75% paid by Medicare" value={75} color="#E6F5F7" />
              <Chart.BarSegment label="25% paid by Medicare" value={25} color="#009FAE" />
              <Chart.BarSegment label="100% of medical gap paid by HBF" value={25} color="#003959" />
            </Chart.Bar>
            <Chart.Bar label="Known gap">
              <Chart.BarSegment label="75% paid by Medicare" value={75} color="#E6F5F7" />
              <Chart.BarSegment label="25% paid by Medicare" value={25} color="#009FAE" />
              <Chart.BarSegment label="50% of medical gap paid by HBF" value={12.5} color="#003959" />
              <Chart.BarSegment label="You pay 50% of medical gap" value={12.5} color="#dedede" />
            </Chart.Bar>
            <Chart.Bar label="No agreement / Opt out">
              <Chart.BarSegment label="75% paid by Medicare" value={75} color="#E6F5F7" />
              <Chart.BarSegment label="25% paid by Medicare" value={25} color="#009FAE" />
              <Chart.BarSegment label="You pay 100% of medical gap" value={25} color="#dedede" />
            </Chart.Bar>
          </Chart>
        </div>

        <h1 className="pt-16 text-3xl font-black">Charts with Data</h1>
        <Details
          type="language-jsx"
          className="mt-2"
          classes={{ summary: 'text-base tracking-normal' }}
          title="Implementation"
          data={`<MultidimensionalChart {...chart2} />
<MultidimensionalChart className="pt-10" {...chart3} />
<MultidimensionalChart className="pt-12" {...chart1} />`}
        />
        <div className="flex flex-col w-full divide-y space-y-14">
          <MultidimensionalChart {...chart2} />
          <MultidimensionalChart className="pt-10" {...chart3} />
          <MultidimensionalChart className="pt-12" {...chart1} />
        </div>
      </div>
    </div>
  )
}
