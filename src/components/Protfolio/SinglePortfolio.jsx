import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay, link } = data;

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab
    }
  }

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={handleClick}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in square-img">
              <img src={imgLink} alt="portfolio" className="square-img-content" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object.isRequired
}

export default SinglePortfolio
