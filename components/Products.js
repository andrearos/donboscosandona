import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from '/components/Products.module.css'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export default function Products({ title, description, cardWidth, products }) {
    return (
        <Container maxWidth="lg">
            <Typography text-align='center' style={{ textAlign: 'center' }} component="h3" variant="h3" color="inherit" gutterBottom>
                {title}
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: 'center', padding: '10px' }} text-align='center' color="text.secondary" paragraph>
                {description}
            </Typography>
            <Grid container>
                {
                    products.map(
                        (product) => (
                            <Grid item md={cardWidth}>
                                <CardActionArea className={styles.card} component="a" href={product.url}>
                                    <Card sx={{ display: 'flex' }} elevation={0}>
                                        <CardContent sx={{ flex: 1 }}>
                                            <CardMedia
                                                component="img"
                                                sx={{display: { xs: 'block', sm: 'block', margin: 'auto' } }}
                                                image={product.immagineUrl}
                                                alt={product.title}
                                            />
                                            <Typography text-align='center' component="h4" variant="h6" style={{ textAlign: 'center' }} color="inherit" gutterBottom>
                                                {product.title}
                                            </Typography>
                                            <Typography variant="subtitle1" style={{ textAlign: 'center' }} color="text.secondary" paragraph>
                                                {product.category}
                                            </Typography >
                                            <Typography variant="subtitle1" style={{ padding: '10px' }} color="inherit" paragraph>
                                                {product.description}
                                            </Typography>
                                            {product.rif &&
                                            <Typography variant="subtitle1" style={{ padding: '10px', }} color="inherit" paragraph >
                                                <div className={styles.label} style={{ backgroundColor: product.labelColor }} >
                                                    <p>{product.rif}</p>
                                                </div>
                                            </Typography>
                                            }
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </Container>
    )
}
