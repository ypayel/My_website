import "./ResponseWebSite.scss"
export const ResponseWebSite = () => {
    return (
        <>
            <div className="main-conteiner">
                <div className="header">
                    <div className="logo-section">
                        <img className="logo" src={process.env.PUBLIC_URL + '/images/58px.webp'} alt="58px"/> <span>Sections</span>
                    </div>
                    <div className="nav">
                        <img className="nav-icon" src={process.env.PUBLIC_URL + '/images/menu.webp'} alt="menu"/>
                        <div className="nav-links">
                            <span>First Link</span>
                            <span>Second Link</span>
                            <span>Third Link</span>
                            <span>Fourth Link</span>
                            <span>Fifth Link</span></div>
                    </div>
                </div>
                <div className="subscribe">
                    <h2 className="subscribe-header">Two line long header example</h2>
                    <p className="subscribe-paragraph">
                        Poster can be one of the effective marketing and advertising materials.
                        It is also a great tool to use when you want to present your.
                    </p>
                    <input
                        className="email-area"
                        type="text"
                        name="username"
                        placeholder="E-mail"
                    />
                    <button className="subscribe-btn">Subscribe</button>
                    <p className="subscribe-info">
                        No spam, notifications only about new products, updates and freebies.
                    </p>
                    <img className="phone" src={process.env.PUBLIC_URL + '/images/iPhone X.webp'} alt="iphone"/>
                </div>
                <hr className="spacer"/>
                <div className="paragraph">
                    <p className="text-paragraf">
                        Like rock stars, asteroids have been given their fair share of urban
                        myth and lore. Many have attributed the extinction of the dinosaurs to
                        the impact of a huge asteroid on the earth.
                    </p>
                </div>
                <hr className="spacer"/>
                <div className="heading-list">
                    <ul className="heading-element">
                        <li className="heading-list-element">
                            <img className="star-icon" src={process.env.PUBLIC_URL + '/images/star.webp'} alt="star"/>
                            <span className="heading-title">Heading</span>
                            <p className="heading-paragraph">You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that
                                you can be sure to get everything.</p>
                            <span className="learn-more">Learn more</span>
                        </li>
                        <li className="heading-list-element">
                            <img className="star-icon" src={process.env.PUBLIC_URL + '/images/star.webp'} alt="star"/><span className="heading-title">Heading</span>
                            <p className="heading-paragraph">TeYou will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that
                                you can be sure to get everything.xt</p>
                            <span className="learn-more">Learn more</span></li>
                        <li className="heading-list-element">
                            <img className="star-icon" src={process.env.PUBLIC_URL + '/images/star.webp'} alt="star"/>
                            <span className="heading-title">Heading</span>
                            <p className="heading-paragraph">
                                You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that
                                you can be sure to get everything.
                            </p>
                            <span className="learn-more">Learn more</span>
                        </li>
                    </ul>
                </div>
                <hr className="spacer"/>
                <div className="statistics">
                    <div className="merchants">
                        <span className="statistic-number">23.4k</span>
                        <span className="statistic-text">Active Merchants</span>
                    </div>
                    <div className="revenues">
                        <span className="statistic-number">$3.4k</span>
                        <span className="statistic-text">Revenues in 2018</span>
                    </div>
                    <div className="downloads">
                        <span className="statistic-number">873K</span>
                        <span className="statistic-text">Downloads</span>
                    </div>
                    <div className="countries">
                        <span className="statistic-number">87+</span>
                        <span className="statistic-text">Countries</span>
                    </div>
                    <div className="revenue-per-hour">
                        <span className="statistic-number">$58</span>
                        <span className="statistic-text">Revenue Per Hour</span>
                    </div>
                </div>
                <hr className="spacer"/>
                <div className="steps">
                    <div className="steps-description">
                        <h2 className="steps-heading">Heading</h2>
                        <h2 className="steps-heading2">Short Heading</h2>
                        <p className="steps-introduction">Poster can be one of the effective marketing and advertising materials.</p>
                        <p className="steps-introduction2">Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.
                        </p>
                    </div>
                    <ul className="steps-list">
                        <li className="step-1">
                            <img className="small-star" src={process.env.PUBLIC_URL + '/images/small-star.webp'}alt="small_star"/>
                            <h3 className="step-header">Step 1</h3>
                            <p className="text-steps">Third you will likely be required to install the fixed mounts. These are what will keep the apparatus.</p>
                            <img className="arrow" src={process.env.PUBLIC_URL + '/images/arrow_forward.webp'} alt="arrow_forward"/>
                        </li>
                        <img className="arrow-right" src={process.env.PUBLIC_URL + '/images/arrow-right.webp'} alt="arrow_right"/>
                        <li className="step-2">
                            <img className="small-star" src={process.env.PUBLIC_URL + '/images/small-star.webp'} alt="small_star"/>
                            <h3 className="step-header2">Step 2</h3>
                            <p className="text-steps">Third you will likely be required to install the fixed mounts. These are what will keep the apparatus.</p>
                            <img className="arrow" src={process.env.PUBLIC_URL + '/images/arrow_forward.webp'} alt="arrow_forward"/>
                        </li>
                        <img className="arrow-right" src={process.env.PUBLIC_URL + '/images/arrow-right.webp'} alt="arrow_right"/>
                        <li className="step-3">
                            <img className="small-star" src={process.env.PUBLIC_URL + '/images/small-star.webp'} alt="small_star"/>
                            <h3 className="step-header3">Step 3</h3>
                            <p className="text-steps">Third you will likely be required to install the fixed mounts. These are what will keep the apparatus.</p>
                        </li>
                    </ul>
                </div>
                <hr className="spacer"/>
                <div className="astronomy">
                    <div className="astronomy-description">
                        <img className="small-star" src={process.env.PUBLIC_URL + '/images/small-star.webp'} alt="star"/>
                        <h2 className="astronomy-heading">Heading</h2>
                        <p className="astronomy-paragraph">The beauty of astronomy is that anybody can do it. From the tiniest baby to the most advanced astrophysicist, there is something for anyone who wants to enjoy astronomy.</p>
                        <span className="learn-more">Learn more</span></div>
                    <img className="phone" src={process.env.PUBLIC_URL + '/images/iPhone X.webp'} alt="iphone"/>
                </div>
                <hr className="spacer"/>
                    <div className="articles">
                        <ul className="list-articles">
                            <li className="article-1">
                                <img className="article-img" src={process.env.PUBLIC_URL + '/images/Image.webp'} alt="image_web"/>
                                <span className="article-date">1 MAY 2020</span>
                                <h3 className="article-title">Heading</h3>
                                <p className="article-description">Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.</p>
                                <div className="article-feedback">
                                    <i className=" eye fa-solid fa-eye"></i>
                                    <span>7.4K</span>
                                    <i className="message fa-solid fa-message"></i>
                                    <span>31</span>
                                </div>
                            </li>
                            <li className="article-2">
                                <img className="article-img" src={process.env.PUBLIC_URL + '/images/Image.webp'} alt="image_web"/>
                                <span className="article-date">1 MAY 2020</span>
                                <h3 className="article-title">Two line long header example for web project </h3>
                                <p className="article-description">Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.</p>
                                <div className="article-feedback">
                                    <i className=" eye fa-solid fa-eye"></i>
                                    <span>7.4K</span>
                                    <i className="message fa-solid fa-message"></i>
                                    <span>31</span>
                                </div>
                            </li>
                            <li className="article-3">
                                <img className="article-img" src={process.env.PUBLIC_URL + '/images/Image.webp'} alt="image_web"/>
                                <span className="article-date">1 MAY 2020</span>
                                <h3 className="article-title">Heading</h3>
                                <p className="article-description">Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.</p>
                                <div className="article-feedback">
                                    <i className=" eye fa-solid fa-eye"></i>
                                    <span>7.4K</span>
                                    <i className="message fa-solid fa-message"></i>
                                    <span>31</span>
                                </div>
                            </li>
                            <li className="article-4">
                                <img className="article-img" src={process.env.PUBLIC_URL + '/images/Image.webp'} alt="image_web"/>
                                <span className="article-date">1 MAY 2020</span>
                                <h3 className="article-title">Two line long header example for web project </h3>
                                <p className="article-description">Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.</p>
                                <div className="article-feedback">
                                    <i className=" eye fa-solid fa-eye"></i>
                                    <span>7.4K</span>
                                    <i className="message fa-solid fa-message"></i>
                                    <span>31</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr  className="spacer"/>
                    <div className="article-5">
                        <h2 className="mobile">Two line header example</h2>
                        <h2 className="computer">Two line long header example with text for your another</h2>
                        <p className="paragraph-article-5">Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.</p>
                        <input
                            className="email-area"
                            placeholder="E-mail"
                        />
                        <button className="subscribe-btn">Subscribe</button>
                        <p className="subscribe-info">
                            No spam, notifications only about new products, updates and freebies.
                        </p>
                    </div>
                    <hr  className="spacer"/>
                    <div className="article-6">
                        <div className="logo-section-2">
                            <img className="logo" src={process.env.PUBLIC_URL + '/images/58px.webp'} alt="58px"/><h2>Sections</h2>
                        </div>
                        <div className="main-link">
                            <div className="link">
                                <ul className="list">
                                    <h3 className="header-category">Category</h3>
                                    <li className="links-list">First Link</li>
                                    <li className="links-list">Second Link</li>
                                    <li className="links-list">Third Link</li>
                                </ul>
                                <ul className="list">
                                    <h3 className="header-category">Category</h3>
                                    <li className="links-list">First Link</li>
                                    <li className="links-list">Second Link</li>
                                    <li className="links-list">Third Link</li>
                                    <li className="links-list">Fourth Long Link</li>
                                    <li className="links-list">Fifth Link</li>
                                    <li className="links-list">Sixth Long Link</li>
                                </ul>
                                <ul className="list">
                                    <h3 className="header-category">Category</h3>
                                    <li className="links-list">First Link</li>
                                    <li className="links-list">Second Link</li>
                                    <li className="links-list">Third Link</li>
                                </ul>
                            </div>
                            <div className="link">
                                <ul className="media">
                                    <li className="list-media"><img src="images/IconColor2.svg" alt="facebook" />Facebook</li>
                                    <li className="list-media"><img src="images/IconColor.svg" alt="youtube" />Youtube</li>
                                    <li className="list-media"><img src="images/IconColor3.svg" alt="instagram" />Instagram</li>
                                    <li className="list-media"><img src="images/IconColor4.svg" alt="twitter" />Twitter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <ul className="link-footer">
                            <li className="list-footer">First Link</li>
                            <li className="list-footer">Second Link</li>
                            <li className="list-footer">Third Link</li>
                        </ul>
                        <div className="footer-elements">
                            <div className="copyright">
                                <p className="footer-paragraf">&copy; Copyright 2020 Pixsellz</p>
                                <p className="footer-paragraf">Premium UI Goods for Designers;</p>
                            </div>
                        </div>
                    </div>
                </div>    
                </>
                )
}

                export default ResponseWebSite;