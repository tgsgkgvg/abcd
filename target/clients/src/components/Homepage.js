import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Homepage extends Component {
  render(){
    return(
      <div>
        <div role="main" className="main">
    			<div className="slider-container rev_slider_wrapper"
    				>
    				<div id="revolutionSlider" className="slider rev_slider"
    					data-plugin-revolution-slider
    					data-plugin-options="{'delay': 9000, 'gridwidth': 800, 'gridheight': 600}">
    					<ul>
    						<li data-transition="fade"><img src="img/team/op.jpg" alt=""
    							data-bgposition="center center" data-bgfit="cover"
    							data-bgrepeat="no-repeat" data-kenburns="on" data-duration="9000"
    							data-ease="Linear.easeNone" data-scalestart="115"
    							data-scaleend="100" data-rotatestart="0" data-rotateend="0"
    							data-offsetstart="0 -200" data-offsetend="0 200"
    							data-bgparallax="0 089"
    									className="rev-slidebg" />

    							<div
    								className="tp-caption tp-caption-overlay tp-caption-overlay-primary main-label"
    								data-x="center" data-y="265" data-start="1000"
    								data-whitespace="nowrap" data-transform_in="y:[100%];s:500;"
    								data-transform_out="opacity:0;s:500;"
    								data-mask_in="x:0px;y:0px;">BABYCARE</div>

    							<div className="tp-caption tp-caption-overlay-opacity bottom-label"
    								data-x="center" data-y="358" data-start="2000"
    								data-transform_in="y:[100%];opacity:0;s:500;">boon to
    								every young one</div>
                </li>
    						<li data-transition="fade"><img src="img/team/grp.jpg" alt=""
    							data-bgposition="center center" data-bgfit="cover"
    							data-bgrepeat="no-repeat" data-kenburns="on" data-duration="9000"
    							data-ease="Linear.easeNone" data-scalestart="115"
    							data-scaleend="100" data-rotatestart="0" data-rotateend="0"
    							data-offsetstart="0 400px" data-offsetend="0 -400px"
    							data-bgparallax="0" className="rev-slidebg" />

    							<div
    								className="tp-caption tp-caption-overlay tp-caption-overlay-primary main-label"
    								data-x="center" data-y="265" data-start="1000"
    								data-whitespace="nowrap" data-transform_in="y:[100%];s:500;"
    								data-transform_out="opacity:0;s:500;"
    								data-mask_in="x:0px;y:0px;">FIGHTERS</div>

    							<div className="tp-caption tp-caption-overlay-opacity bottom-label"
    								data-x="center" data-y="358" data-start="2000"
    								data-transform_in="y:[100%];opacity:0;s:500;">THE LIFE
    								SEEKERS</div>
                </li>
    					</ul>
    				</div>
    			</div>
    			<div id="modules">
    				<br/> <br/> <br/> <br/>
    				<div className="container">
    					<div className="row mt-xl">
    						<div className="col-md-12 col-md-offset-0">

    							<div className="tabs tabs-bottom tabs-center tabs-simple mt-sm mb-xl">
    								<ul className="nav nav-tabs">
    									<li className="active"><a href="#tabsNavigationSimpleIcons1"
    										data-toggle="tab"> <span
    											className="featured-boxes featured-boxes-style-6 p-none m-none">
    												<span
    												className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
    													<span className="box-content p-none m-none"> <i
    														className="icon-featured glyphicon glyphicon-time icons"></i>
    												</span>
    											</span>
    										</span>
    											<p className="mb-none pb-none">Reminder</p>
    									</a></li>
    									<li><a href="#tabsNavigationSimpleIcons2"
    										data-toggle="tab"> <span
    											className="featured-boxes featured-boxes-style-6 p-none m-none">
    												<span
    												className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
    													<span className="box-content p-none m-none"> <i
    														className="icon-featured glyphicon glyphicon-home icons"></i>
    												</span>
    											</span>
    										</span>
    											<p className="mb-none pb-none">Vacci at Home</p>
    									</a></li>
    									<li><a href="#tabsNavigationSimpleIcons3"
    										data-toggle="tab"> <span
    											className="featured-boxes featured-boxes-style-6 p-none m-none">
    												<span
    												className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
    													<span className="box-content p-none m-none"> <i
    														className="icon-featured glyphicon glyphicon-facetime-video icons"></i>
    												</span>
    											</span>
    										</span>
    											<p className="mb-none pb-none">Live Doc Talk</p>
    									</a></li>
    									<li><a href="#tabsNavigationSimpleIcons4"
    										data-toggle="tab"> <span
    											className="featured-boxes featured-boxes-style-6 p-none m-none">
    												<span
    												className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
    													<span className="box-content p-none m-none"><span className='removeBottomBorder'><Link to='/Map'> <i
    														className="icon-featured glyphicon glyphicon-map-marker icons"
    														></i></Link></span>
    												</span>
    											</span>
    										</span>
    											<p className="mb-none pb-none">Locate</p>
    									</a></li>
    									<li><a href="#tabsNavigationSimpleIcons5"
    										data-toggle="tab"> <span
    											className="featured-boxes featured-boxes-style-6 p-none m-none">
    												<span
    												className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
    													<span className="box-content p-none m-none"> <i
    														className="icon-featured glyphicon glyphicon-list-alt icons"
    														onclick="location.href='#news'"></i>



    												</span>
    											</span>
    										</span>
    											<p className="mb-none pb-none">News</p>
    									</a></li>
    									<li><a href="#tabsNavigationSimpleIcons6"
    										data-toggle="tab"> <span
    											className="featured-boxes featured-boxes-style-6 p-none m-none">
    												<span
    												className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
    													<span className="box-content p-none m-none"> <span className='removeBottomBorder'>

                              <Link to='/Schedule'>
                              <i className="icon-featured glyphicon glyphicon-calendar icons"></i></Link></span>
    												</span>
    											</span>
    										</span>
    											<p className="mb-none pb-none"><Link to='/Schedule'>Scheduler</Link></p>
    									</a></li>



    								</ul>
    								<div className="tab-content">
    									<div className="tab-pane active" id="tabsNavigationSimpleIcons1">
    										<div className="center">
    											<p>
    												<strong>Babycare</strong> provides you a free SMS Reminder
    												service, helps you to make sure your child gets all
    												necessary vaccinations by sending you alert on our
    												registered phone number or email id prior to the scheduled
    												vaccination date. <b>you must login to avail the benefit
    													of Babycare Reminder </b>
                          </p>
    										</div>
    									</div>
    									<div className="tab-pane" id="tabsNavigationSimpleIcons2">
    										<div className="center">
    											<p>
    												connecting patients to helpers who will help patients to get
    												immunised completely<br/> <b>Coming Soon</b>
    											</p>
    										</div>
    									</div>
    									<div className="tab-pane" id="tabsNavigationSimpleIcons3">
    										<div className="center">
    											<p>
    												Here we connect parents with qualified doctors, where
    												parents can ask and clear their doubts regarding
    												vaccination, child growth etc. Parents pay a virtual visit
    												to doctor, who sees their patients via webcam (can remove
    												this underlined sentence). We initiate the communication
    												through video chats, either one-on-one or in a group. The
    												video calling is done as per the schedule (Hyperlink to
    												livedoc schedule) with the help and Google Hangout where
    												parents are free to ask their queries. To avail this feature
    												User must be logged in. <b>Coming Soon</b>
                        </p>
    										</div>
    									</div>
    									<div className="tab-pane" id="tabsNavigationSimpleIcons4">
    										<div className="center">
    											<p>This is one of our service where we provide user with
    												nearest hospital/clinic/Vaccination point where they can get
    												their child vaccinated. Simply share your location or city
    												and state to find mapped locations of a vaccine providers.
    												Use the Babycare Vaccine Finder (Hyperlink to map) to find
    												where to get vaccinated in your area!
                          </p>
    										</div>
    									</div>
    									<div className="tab-pane" id="tabsNavigationSimpleIcons5">
    										<div className="center">

    											<p>Get the latest news from the world of medical and
    												vaccination. Learn about the latest discoveries and debates
    												from around the world.</p>

    										</div>
    									</div>
    									<div className="tab-pane" id="tabsNavigationSimpleIcons6">
    										<div className="center">
    											<p>Babycare Scheduler will help you to know the actual
    												date for your child to get immunised according to
    											childs date of birth.
                        </p>
    										</div>
    									</div>

    								</div>
    							</div>


    						</div>
    					</div>

    				</div>
    			</div>
    			<br/>
    			<br/>


    			<section id="news">
    				<div className="container">

    					<div className="col-md-12 center">
    						<h2 className="mb-none mt-xl font-weight-semibold text-dark">
    							<p>NEWS</p>
    						</h2>
    						<br/> <br/>

    						<div className="owl-carousel owl-theme"
    							data-plugin-options="{'items': 4, 'autoplay': true, 'autoplayTimeout': 3000}">



    							<div>
    								<a
    									className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    									href="MEASLES OUTBREAK.jsp"> <img className="img-responsive"
    									src="img/team/measles outbreak.jpg" alt="MEASLES OUTBREAK"/>
    								</a>
    								<div>
    									<div
    										className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    										href="">
    										<h4
    											className="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">

    											<a href="MEASLES OUTBREAK.jsp">MEASLES OUTBREAK</a>


    										</h4>
    									</div>
    								</div>
    							</div>



    							<div>
    								<a
    									className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    									href="Mumps.jsp"> <img className="img-responsive"
    									src="img/team/Whatsapp rumour.jpg" alt=" WHATSAPP RUMOUR"/></a>
    								<div>
    									<div
    										className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    										href="">
    										<h4
    											className="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">

    											<a href="MUMPS.jsp">WHATSSAP RUMOUR</a>

    										</h4>
    									</div>
    								</div>



    							</div>


    							<div>
    								<a
    									className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    									href="ZIKA VIRUS.jsp"> <img className="img-responsive"
    									src="img/team/zika.jpg" alt="ZIKA VIRUS" width="100"
    									height="80" border="100"/></a>
    								<div>
    									<div
    										className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    										href=""> <br/> <br/>
    										<h4
    											className="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">

    											<a href="ZIKA VIRUS.jsp">ZIKA VIRUS</a>


    										</h4></div>
    								</div>

    							</div>


    							<div>
    								<a
    									className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    									href="VaccinationforTravelers.jsp"> <img
    									className="img-responsive" src="img/team/Travellers1.jpg"
    									alt="TRAVELLERS"/></a>
    								<div>
    									<div
    										className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    										href="">
    										<h4
    											className="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">
    											<a href="VaccinationforTravelers.jsp">VACCINE FOR
    												TRAVELLERS</a>
    										</h4>
    									</div>
    								</div>

    							</div>



    							<div>
    								<a
    									className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    									href="polio.jsp"> <img className="img-responsive"
    									src="img/team/Significance-of-Vaccination-for-Pre-term-Babies.jpg"
    									alt=""/></a>
    								<div>
    									<div
    										className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    										href="">
    										<h4
    											className="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">
    											<a href="polio.jsp">POLIO VACCINES</a>
    										</h4>
    									</div>
    								</div>

    							</div>



    							<div>
    								<a
    									className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    									href="myth.jsp"> <img src="img/team/Myth.png" alt=""
    									width="" height=""/></a> <br/>
    								<div>
    									<div
    										className="gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold"
    										href="">
    										<h4
    											className="gs-c-promo-heading__title gel-pica-bold nw-o-link-split__text">
    											<a href="myth.jsp">MYTH ABOUT VACCINATION</a>
    										</h4>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</section>

    			<br/>
    			<br/>


    			<div>
    				<section className="section section-tertiary section-front mt-none">
    					<div className="container">
    						<div className="row">
    							<div className="col-md-12 center">
    								<div className="row">
    									<div className="col-md-12 center">
    										<h2 className="mb-none mt-xl font-weight-semibold text-dark">OUR
    											TEAM</h2>
    										<p className="lead mb-xlg">
    											Babycare is a social enterprise, committed to reduce child
    											mortality in India due to vaccine preventable diseases.<br/>
    											Our aim is to increase immunisation for children by providing
    											timely vaccination reminders to parents and spreading
    											awareness. Our Focus is to: Use simple yet effective
    											approaches to reach everyone eligible for immunization Ensure
    											maximum reach across the country by increasing awareness for
    											immunization Provide free vaccination reminders upto 5 years
    											of age Remind about National Polio Vaccination by Govt. of
    											India
    										</p>
    										<div
    											className="divider divider-primary divider-small divider-small-center mb-xl">
    											<hr/>
    										</div>
    									</div>
    								</div>
    								<div className="row">


    									<div className="col-md-4">
    										<div className="testimonial testimonial-style-2 appear-animation"
    											data-appear-animation="fadeInRight"
    											data-appear-animation-delay="700">
    											<blockquote>

    											</blockquote>
    											<div className="testimonial-arrow-down"></div>
    											<div className="testimonial-author">
    												<img src="img/team/upendra.jpg"
    													className="img-responsive img-circle" alt=""/>
    												<p>
    													<strong>Upendra Sharma</strong><span>IT Branch</span>
    												</p>
    											</div>
    										</div>
    									</div>

    									<div className="col-md-4">
    										<div className="testimonial testimonial-style-2 appear-animation"
    											data-appear-animation="fadeInUp"
    											data-appear-animation-delay="600">
    											<blockquote>

    											</blockquote>
    											<div className="testimonial-arrow-down"></div>
    											<div className="testimonial-author">
    												<img src="img/team/tiwari.jpg"
    													className="img-responsive img-circle" alt=""/>
    												<p>
    													<strong>jatin sharma</strong><span>IT Branch</span>
    												</p>
    											</div>
    										</div>
    									</div>


    									<div className="col-md-4">
    										<div className="testimonial testimonial-style-2 appear-animation"
    											data-appear-animation="fadeInLeft"
    											data-appear-animation-delay="300">
    											<blockquote>
    												<p></p>
    											</blockquote>
    											<div className="testimonial-arrow-down"></div>
    											<div className="testimonial-author">
    												<img src="img/team/ankit.jpg"
    													className="img-responsive img-circle" alt=""/>
    												<p>
    													<strong>Ankush Shukla</strong>
    												</p>
    											</div>
    										</div>
    									</div>






    								</div>


    								<div className="row">
    									<div className="col-md-12 center">


    									</div>
    								</div>


    								<div className="row">

    								</div>


    							</div>
    						</div>
    					</div>
    				</section>
    			</div>

    		 <div className="container">

    				<div className="row mt-xl">
    					<div className="counters counters-text-dark">
    						<div align="justify">

                <div className="col-md-3 col-sm-6">
    							<div className="counter appear-animation"
    								data-appear-animation="fadeInUp"
    								data-appear-animation-delay="600">
    								<i className="fa fa-user"></i> <strong data-to="10">0</strong> <label>
    									Happy Clients</label>
    								<p className="text-color-primary mb-xl">They cannnot be wrong</p>
    							</div>
    						</div>


    						<div className="col-md-3 col-sm-6">
    							<div className="counter appear-animation"
    								data-appear-animation="fadeInUp"
    								data-appear-animation-delay="600">
    								<i className="fa fa-desktop"></i> <strong data-to="19">0</strong> <label>Premade
    									HomePages</label>
    								<p className="text-color-primary mb-xl">Many more to come</p>
    							</div>
    						</div>
    						<div className="col-md-3 col-sm-6">
    							<div className="counter appear-animation"
    								data-appear-animation="fadeInUp"
    								data-appear-animation-delay="900">
    								<i className="fa fa-ticket"></i> <strong data-to="2500"
    									data-append="+">0</strong> <label>Answered Tickets</label>
    								<p className="text-color-primary mb-xl">Satisfaction guaranteed</p>
    							</div>
    						</div>
    						<div className="col-md-3 col-sm-6">
    							<div className="counter appear-animation"
    								data-appear-animation="fadeInUp"
    								data-appear-animation-delay="1200">
    								<i className="fa fa-clock-o"></i> <strong data-to="3000"
    									data-append="+">0</strong> <label>Development Hours</label>
    								<p className="text-color-primary mb-xl">Available to you for
    									only $16</p>
    							</div>
    						 </div>
    					</div>

    				</div>
    			</div>
    	</div>


      </div>
    </div>
    );
  }
}
export default Homepage;
