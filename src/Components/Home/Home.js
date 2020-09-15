import React from "react";
import Product from "../Product/Product";
import ProductRow from "../ProductRow/ProductRow";
import "./Home.css";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className="home">
            <div id="home__top" className="home__container">
                <img 
                    alt=""
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
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

            <div className="home__row">
                <Product 
                   id={444}
                   title={"The Endgame Paperback – 20 July 2020 by S. Hussain Zaidi"} 
                   price={"10"} 
                   image={"https://images-na.ssl-images-amazon.com/images/I/81tG88S60xL.jpg"}
                   rating={5}
                   description={"It's been three years since Shahwaz Ali Mirza and Vikrant Singh foiled dreaded terrorist Munafiq's attempt to leak State secrets from a naval server in Lakshadweep. Now posted with RAW, they have the task of providing security for BSF Special Director General Somesh Kumar, on his way to visit former Prime Minister Parmeshwar Naidu, who has been hospitalized after a car accident. However, Kumar's convoy is attacked by terrorists. They manage to kill him before being gunned down themselves. A tip-off leads the duo to a hotel on Mira Road where the prime suspect, Al Muqadam, is hiding. Vikrant recognizes him as Ayyub, the brother of one of his long-time informants, Mazhar Khan. Just when it looks like things can't get more difficult, Major Daniel Fernando gets in touch claiming that there is more to Naidu's accident than meets the eye. Soon, the entire team from the Lakshadweep operation finds itself getting together for a new mission... Hussain Zaidi is back with his irresistible cast of characters in this sizzling story of politics, betrayal and unimaginable terror"}
                />

                <Product 
                   id={54343}
                   title={"Lay's Potato Chips India's Magic Masala Party Pack, 167g Pack"} 
                   price={"1"} 
                   image={"https://images-na.ssl-images-amazon.com/images/I/81X7W2BrGaL._SL1500_.jpg"}
                   rating={2}
                   description={"Taste the unbeatable blend of delectable indian spices with best quality potatoes From the everyday snack to the impromptu get-togethers, lay's chips are the perfect addition to any occasion 100 Percent vegetarian, best quality potatoes, finest quality of spices and edible vegetable oils Country of Origin: India"}
                />
                
            </div>

            <div className="home__row">
                <Product 
                   id={555}
                   title={"LG 687 L Frost Free Side-by-Side Refrigerator(GC-B247SLUV.APZQEBN, Platinum Silver, Inverter Compressor)"} 
                   price={"100"} 
                   image={"https://images-na.ssl-images-amazon.com/images/I/71jZc0j2J2L._SL1500_.jpg"}
                   rating={4}
                   description={"Energy savings with inverter linear compressor Capacity 687 L: Suitable for families with 5 or more members Warranty: 1 year on product, 10 years on compressor Multiple cooling air vents distribute and circulate cool air to every corner of the refrigerator, ensuring that each and every food items is properly cooled Smart Diagnosis is a fast and easy way to troubleshoot issues Multi digital sensors monitor both internal and external temperatures for temperature consistency which helps to maintain the quality of food for longer With 600 liters & more of mega capacity, you can enjoy Better organization and smarter storage. Stock up on and store as per your need"} 
                />

                <Product
                   id={666} 
                   title={"SAMSUNG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"} 
                   price={"120"}
                   image={"https://images-na.ssl-images-amazon.com/images/I/81cB6pJsTaL._SL1500_.jpg"}
                   rating={5}
                   description={"Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices Sound : 20 Watts Output | Dolby Digital Plus Smart TV Features : Voice Assistants | SmartThings App | Personal Computer | Home Cloud | Live Cast | Screen Share | Music System Display : LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design Alexa Built-in: Voice control your TV and your day. Just ask Alexa to search for movies, play music, control smart home devices, get sports updates and more Warranty Information: 1 year comprehensive and 1 year additional warranty on Panel by Samsung Installation: For requesting installation/wall mounting/demo of this product once delivered, please directly call Samsung support on [1800407267864/180057267864] and provide product's model name as well as seller's details mentioned on the invoice Easy returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description provided"} 
                />

                <Product
                   id={777} 
                   title={"ASGARD Day & Date Feature Watch for Men, Boys-158-DD1"} 
                   price={"5"} 
                   image={"https://images-na.ssl-images-amazon.com/images/I/41XdRy2BxfL.jpg"}
                   rating={3}
                   description={"1 Year ASGARD INDIA Replacement Warranty Day & Date display II Leather Strap || Stainless Steel Back || Water Resistant Suitable For Party Wedding, Formal And Casual Occasion Direct From The BRAND House Package Includes: 1 Watch || Company Box || Warranty Card || Gst Paid Bill If this product is sold by Amazon, please review the manufacturer’s website for warranty information. If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website."}
                />
            
                
            </div>

            <ProductRow category="electronics" />
            <ProductRow category="jewelery" />
            <ProductRow category="men clothing" />
            <ProductRow category="women clothing" />
            
            <Footer />
        </div>
    )
}

export default Home;