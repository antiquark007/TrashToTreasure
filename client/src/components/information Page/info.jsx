import './info.css';
import logo from './assets/logo.jpg';

function Infopage() {
    return (
        <>
            {/* Navigation Bar */}
            <nav className='container'>
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <h1 className="site-title">Trash To Treasure</h1>
                    <ul>
                        <li><a href="#typesoftrash"><button>Types of Trash</button></a></li>
                        <li><a href="#howtorecycle"><button>How to Recycle</button></a></li>
                        <li><a href="#tutorial"><button>Tutorials</button></a></li>
                        <li><a href="#tips"><button>Tips</button></a></li>
                    </ul>
                </div>
            </nav>

            {/* Main Information Section */}
            <section className="info-section">
                <h1 className="main-heading">Learn About Waste & Recycling</h1>
                <div className="content">
                    {/* Types of Trash */}
                    <article className="type" id='typesoftrash'>
                        <h2>Types of Trash</h2>
                        <h3>Recyclable Trash</h3>
                        <p>Recyclable trash includes materials that can be processed and used again. Common recyclable items are paper, cardboard, glass, and certain plastics.</p>
                        <h3>Non-Recyclable Trash</h3>
                        <p>Non-recyclable trash includes materials that cannot be recycled due to contamination or lack of processing facilities. Examples include certain plastics, polystyrene, and packaging.</p>
                        <h3>Electronic Waste</h3>
                        <p>Electronic waste, or e-waste, includes discarded electronic devices such as computers, smartphones, and appliances. E-waste often contains hazardous materials that require special handling.</p>
                    </article>

                    {/* How Trash is Recycled */}
                    <article className="type" id='howtorecycle'>
                        <h2>How Trash is Recycled</h2>
                        <p>The recycling process ensures materials are properly processed and reused. Here’s a brief overview:</p>
                        <ol>
                            <li><strong>Collection:</strong> Recyclables are gathered from homes, businesses, and recycling centers.</li>
                            <li><strong>Sorting:</strong> Materials are separated by type (e.g., paper, glass, plastic) at a facility.</li>
                            <li><strong>Cleaning:</strong> The sorted materials are cleaned to remove any contaminants.</li>
                            <li><strong>Processing:</strong> Clean materials are processed into raw materials for new products.</li>
                            <li><strong>Manufacturing:</strong> The raw materials are used to create new products, completing the recycling loop.</li>
                        </ol>
                    </article>

                    {/* Tutorial Videos */}
                    <article className="type" id='tutorial'>
                        <h2>Watch How Trash is Recycled</h2>
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/p71xuG_dP7M" title="Recycling Process 1" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/I2RkQv3hsyk" title="Recycling Process 2" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/cNPEH0GOhRw" title="Recycling Process 3" allowFullScreen></iframe>
                            <iframe src="https://www.youtube.com/embed/1nicf4RjU00?start=40" title="Recycling Process 4" allowFullScreen></iframe>
                        </div>
                    </article>

                    {/* Recycling Tips */}
                    <article className="type" id="tips">
                        <h2>Recycling & Safety Tips</h2>

                        <h3>Safety First</h3>
                        <ul>
                            <li><strong>Bring a Buddy:</strong> Never go alone; always inform someone.</li>
                            <li><strong>Stay Visible:</strong> Wear bright or reflective clothing.</li>
                            <li><strong>Be Cautious:</strong> Work in daylight and avoid traffic areas.</li>
                            <li><strong>Use Gloves & Tools:</strong> Avoid direct contact with sharp or unknown objects.</li>
                            <li><strong>Avoid Hazardous Items:</strong> Do not touch syringes, razor blades, or chemicals.</li>
                            <li><strong>Wash Hands:</strong> Clean up thoroughly after handling trash.</li>
                        </ul>

                        <h3>Handling Found Objects</h3>
                        <ul>
                            <li><strong>Check First:</strong> Look for rust, dirt, or damage.</li>
                            <li><strong>Clean Safely:</strong> Wash before disinfecting, avoid mixing chemicals.</li>
                            <li><strong>Wear Protection:</strong> Use gloves, masks, and eye protection.</li>
                            <li><strong>Store Carefully:</strong> Label and secure cleaning supplies.</li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Infopage;
