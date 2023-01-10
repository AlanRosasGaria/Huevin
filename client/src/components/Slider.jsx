import Carousel from 'react-bootstrap/Carousel';
import javaScriptImg from '../assets/img/Slider/JavaScript.png'
import cssImg from '../assets/img/Slider/Css.png'
import htmlImg from '../assets/img/Slider/Html.png'
import '../css/Slider.css'
function IndividualIntervalsExample() {
    return (
        <Carousel className='container-global-slider'>
            <Carousel.Item interval={1000}>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={javaScriptImg}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='container_info_slider'>JavaScript</h3>
                    <p>JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={cssImg}
                    alt="Second slide"
                />
                <Carousel.Caption variant="dark">
                    <h3>CSS3</h3>
                    <p>Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) (incluyendo varios lenguajes basados en XML como SVG, MathML o XHTML). </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src={htmlImg}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>HTML5</h3>
                    <p>HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;