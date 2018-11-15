import React from 'react';

const Location = () => (
  <div className="location_wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2141186102417!2d30.21070721635242!3d59.945181781878546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469637215738068f%3A0xbc85521fd8e00379!2z0YPQuy4g0JrQvtGA0LDQsdC70LXRgdGC0YDQvtC40YLQtdC70LXQuSwgMjIsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTkyMjY!5e0!3m2!1sru!2sru!4v1542295937014"
      width="100%"
      height="500px"
      frameBorder="0"
      allowFullScreen></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
  </div>
);

export default Location;
