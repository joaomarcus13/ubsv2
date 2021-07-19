/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, DetailsView, ListItem } from './listStyle';
import { colors } from '../../styles/vars';

function Details({
  color,
  headerData,
  detailsData = null,
  item,
  callbackIcons,
}) {
  const [openDetails, setOpenDetails] = useState(false);
  // console.log(Object.entries(item));
  return (
    <ListItem
      onClick={() => {
        setOpenDetails(!openDetails);
      }}
      openDetails={openDetails}
      style={{ backgroundColor: color }}
      key={item.id}
    >
      <div className="content">
        <div className="body">
          {Object.keys(headerData).map((index) => (
            <span key={index}>
              {(!openDetails || !detailsData) && <div>{item[index]}</div>}
            </span>
          ))}

          <span>
            <div>{callbackIcons && callbackIcons(item)}</div>
          </span>
        </div>
        {openDetails && detailsData && (
          <DetailsView color={color}>
            {Object.entries(detailsData).map(([key, value]) => (
              <div>
                <span>{value}:</span>
                <span>{item[key]}</span>
              </div>
            ))}
            {item.Clients && (
              <div>
                <span>Numero de moradores:</span>
                <span>{item.Clients.length}</span>
              </div>
            )}
          </DetailsView>
        )}
      </div>
    </ListItem>
  );
}

function Listing({ data, headerData, detailsData, callbackIcons }) {
  return (
    <List>
      <div className="header">
        {Object.values(headerData).map((item) => (
          <span key={item}>
            <div>{item}</div>
          </span>
        ))}
        <span>
          <div> </div>
        </span>
      </div>
      {data.map((item, index) => (
        <Details
          color={colors.list[index % 2]}
          item={item}
          headerData={headerData}
          callbackIcons={callbackIcons}
          detailsData={detailsData}
        />
      ))}
    </List>
  );
}

Listing.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Listing;
