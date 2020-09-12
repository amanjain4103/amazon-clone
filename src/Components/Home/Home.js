import React from "react";
import Product from "../Product/Product";
import ProductRow from "../ProductRow/ProductRow";
import "./Home.css"


const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    alt=""
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                   id={111}
                   title={"HP EliteDisplay 23.8-inch (60.45 cm) IPS Anti Glare Full HD Monitor with Pivot Rotation and VGA - E243 (Black)"} 
                   price={"119.3"} 
                   image={"https://images-na.ssl-images-amazon.com/images/I/81ESAee6o9L._SL1500_.jpg"}
                   rating={4}
                   description={"Expand your productivity with uninterrupted views on a high resolution, 3-sided micro-edge bezel IPS screen that supports virtually seamless multi-display arraysFind your most comfortable, productive position with adjustable tilt, height, swiveland up to 150 mm height adjustment settingsConnect to your most frequently-used displays and devices with a range of integrated ports right at the displayEasy USB peripheral connectivity from the built-in USB hub and VGA and DVI inputs250 cd/m² Brightness and 1000:1 static; 10000000:1 dynamic Contrast1 VGA, 1 HDMI 1.4 (with HDCP support), 1 DisplayPort 1.2 (with HDCP support), 2 USB 3.0Tilt: -5 to +23 degree; Swivel: 45 degree; Pivot rotation: 90 degree; Height: 150 mmEnergy Star certified, EPEAT registered; Arsenic-free; Mercury-free; Low halogen"}
                />

                <Product
                   id={333} 
                   title={"Leotude Cotton Maroon White Black Hoodie Jacket for Men"} 
                   price={"20"}
                   image={"https://images-na.ssl-images-amazon.com/images/I/61uwspZG3nL._UL1500_.jpg"}
                   rating={5}
                   description={"Care Instructions: Hand WashFit Type: Classic FitFit Type: Regular FitSize Guide : SMALL (S)(38),MEDIUM (M)(40),LARGE (L)(42),X-LARGE (XL)(44), XX-LARGE (XXL)(46)Fabric: Natural Premium 100% Cotton that is what makes our t-shirt so good. Soft and light on your skin, it also breathes very well. Design: Leotude Design's every t-shirt, in-house, under our watchful eyes. The stitches are seamed in a way that it will contour your physique and ensure it accentuates your style quotient. Made to last long doesn't have to look rugged, we have ensured a smooth finish overall that will ensure you a good experience.Colour: Leotude Does not use any harmful chemicals are used in manufacturing our dyes. We ensure that our colours are don't run off and are tested rigorously. Getting it done from India's top 10 dyeing unit, our colours look good and stay the same for a long time.There might be minor colour variation between actual product and image shown on screen due to lighting on the photographyPatterns: When you wish to move away from the classic, we have a wide range of patterns that are in style, for the seasons to come. We at (Leotude) abide by what we believe in, our products are known for its quality, durability, styling. unique representation and lot more. Care Instructions: Gentle Machine Wash"}
                />

                <Product
                   id={222} 
                   title={"ASUS TUF Gaming FX505DT 15.6 FHD 120Hz Laptop GTX 1650 4GB Graphics (Ryzen 5-3550H/8GB RAM/1TB HDD + 256GB PCIe SSD/Windows 10/Stealth Black/2.20 Kg), FX505DT-AL202T "} 
                   price={"1200"} 
                   image={"https://images-na.ssl-images-amazon.com/images/I/815K4p82zlL._SL1500_.jpg"}
                   rating={3}
                   description={"Processor: AMD Ryzen 5-3550H processor, 2.1GHz Base speed (6MB cache, up to 3.7GHz),Memory & Storage: 8GB DDR4 2400MHz RAM upgradeable upto 32GB RAM with| NVIDIA GeForce GTX 1650 GDDR5 4GB VRAM Graphics| Storage: 1TB 5400RPM 2.5' HDD + PCIe NVMe 256GB M.2 SSDDisplay: 15.6 (16:9) LED-backlit FHD (1920x1080) 120Hz Anti-Glare IPS-level Panel with 45% NTSCOperating System: Pre-loaded Windows 10 Home with lifetime validityDesign & battery: 6.5mm Thin bezel | Laptop weight 2.20kg | Lithium battery 3-CellHypercool Technology: Anti-Dust Cooling | Powerful Dual Fan Design | HyperFan| Patented Trapezoid-cut LidKeyboard: Highlighted WASD key group| All-zone RGB Backlight| 20 Million Key Presses | 1.8mm Key Travel| 0.25mm Keycap Curve| Overstroke Technology| HyperStrike technology"}
                />
            
                
            </div>

            <ProductRow category="electronics" />
            <ProductRow category="jewelery" />
            <ProductRow category="men clothing" />
            <ProductRow category="women clothing" />

        </div>
    )
}

export default Home;