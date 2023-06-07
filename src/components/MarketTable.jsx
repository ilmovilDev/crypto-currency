import { Link } from "react-router-dom"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useAxios } from "../hooks/useAxios";
import { HasError } from "./HasError";

export const MarketTable = () => {

    const { response, loading, hasError } = useAxios('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en');

    if (loading) {
        return null;
    } else if (hasError) {
        return <HasError />
    }

    return (
        <Paper
            className="animate__animated animate__fadeIn"
            sx={{ width: '100%', overflow: 'hidden' }}
        >
            <TableContainer
                sx={{ maxHeight: '65vh', paddingX: 1 }}
            >
                <Table
                    stickyHeader
                    aria-label="sticky table"
                >
                    <TableHead
                        sx={{
                            'th': {
                                fontWeight: 600,
                            }
                        }}
                    >
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="left">Coin</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Low 24H</TableCell>
                            <TableCell align="right">High 24H</TableCell>
                            <TableCell align="right">24H</TableCell>
                            <TableCell align="right">Mkt Cap</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        className="table-body"
                    >
                        {response?.map((coin) => {

                            const { id, market_cap_rank, image, name, symbol, current_price, high_24h, low_24h, price_change_percentage_24h, market_cap } = coin;
                            const priceChangeColor = price_change_percentage_24h < 0 ? '#cf0b2c' : '#039b45';

                            return (
                                <TableRow
                                    component={Link}
                                    to={`/coin/${id}`}
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell>
                                        {market_cap_rank}
                                    </TableCell>

                                    <TableCell // Icon - name - symbol
                                        align="left"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <img
                                            style={{ width: '2rem', height: '2rem' }}
                                            src={image}
                                            alt={`Icon ${name}`}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 700
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                        >
                                            {symbol.toUpperCase()}
                                        </Typography>
                                    </TableCell>

                                    <TableCell // Price
                                        align="right"
                                    >
                                        {`$ ${current_price.toFixed(2)}`}
                                    </TableCell>

                                    <TableCell // low_24h
                                        align="right"
                                    >
                                        {`$ ${low_24h.toFixed(2)}`}
                                    </TableCell>

                                    <TableCell // high_24h
                                        align="right"
                                    >
                                        {`$ ${high_24h.toFixed(2)}`}
                                    </TableCell>

                                    <TableCell // 24H
                                        align="right"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.75,
                                            color: priceChangeColor,
                                        }}
                                    >
                                        {price_change_percentage_24h.toFixed(2)}
                                        {price_change_percentage_24h > 0 ? (
                                            <TrendingUpIcon />
                                        ) : (
                                            <TrendingDownRoundedIcon />
                                        )}
                                    </TableCell>

                                    <TableCell // Mtk Cap
                                        align="right"
                                    >
                                        {`$ ${market_cap.toLocaleString()}`}
                                    </TableCell>

                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
