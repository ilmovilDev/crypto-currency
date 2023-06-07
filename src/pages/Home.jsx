import { Container } from "@mui/material"
import { MarketTable, TrendingCard } from "../components"
import { Title } from "../style-components/Title"

export const Home = () => {

  return (
    <Container
      maxWidth='lg'
    >

      <Title>Trending</Title>
      <TrendingCard />

      <Title>Markets</Title>
      <MarketTable />

    </Container>
  )
}
