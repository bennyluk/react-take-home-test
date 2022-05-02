import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography,
  CircularProgress,
} from "@mui/material";

import OpenPositionListItem from './OpenPositionListItem';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const jobFilters = [
  {
    label: 'ALL LOCATIONS',
    key: 'location'
  },
  {
    label: 'All TEAMS',
    key: 'team'
  },
  {
    label: 'All WORK TYPES',
    key: 'commitment'
  },
]

export default props => {
  const [ jobPositions, setJobPositions ] = useState();
  const [ filteredPositions, setFilteredPositions ] = useState([]);

  const [ filters, setFilters ] = useState({});
  const [ activeFilters, setActiveFilters ] = useState(() => {
    var activeFilters = {};

    jobFilters.forEach(filter => activeFilters[filter.key] = 'all')

    return activeFilters;
  });

  useEffect(() => {
    fetch('https://api.lever.co/v0/postings/paralleldomain?mode=json')
      .then(response => response.json())
      .then(data => {
        let positions = [];

        let filters = {};
        let activeFilters = {};
        let existedFilter = {}; // used to keep track if category is already added in the filter, helps performance.

        data.forEach(position => {
          let {
            categories
          } = position;
          
          for(let categoryName in categories) {
            let category = categories[categoryName];

            if(!existedFilter[category]) {
              if(typeof filters[categoryName] == 'undefined') {
                filters[categoryName] = [];
                activeFilters[categoryName] = category;
              }
  
              filters[categoryName].push(category);

              existedFilter[category] = true;
            }
          }

          positions.push(
            {
              categories,
              applyUrl: position.applyUrl,
              text: position.text,
            }
          )
        });

        setFilters(filters);
        setJobPositions(positions);
      })
      .catch(error => {

      });
  }, [])
  
  useEffect(() => {
    if(jobPositions) {
      let filteredPositions = [...jobPositions];

      // filter all the job positions
      for(let filterKey in activeFilters) {
        if(activeFilters[filterKey] != 'all') {
          filteredPositions = filteredPositions.filter(pos => {
            return pos.categories[filterKey] == activeFilters[filterKey];
          })
        }
      }

      // group the job positions by teams
      filteredPositions = filteredPositions.reduce(
        (teams, position) => {
          const key = position.categories.team;

          if (!teams[key]) {
            teams[key] = []
          }

          teams[key].push(position);

          return teams;
        }, {})
        
      setFilteredPositions(filteredPositions);
    }
  }, [
    jobPositions,
    activeFilters
  ]);

  // fetching data -- show loading
  if(!jobPositions) {
    return (
      <Box sx={{
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'py': 20
      }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <Box 
          pt={ 5 }
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            '@media screen and (min-width: 800px)': {
              flexDirection: 'row',
              alignItems: 'center',
            }
          }}>

          <Typography
            sx={{ 
              'textTransform': 'uppercase',
              'fontSize': '14px',
              'letterSpacing': '0.014em'
             }}>
              Filter By:
          </Typography>
          
          {
            jobFilters.map(filter => {
              let {
                key,
                label
              } = filter;

              return (
                <FormControl
                  key={ key }
                  sx={ { 
                    ml: 0,
                    mt: 2,
                    '@media screen and (min-width: 800px)': {
                      ml: 3,
                      mt: 0
                    }
                  }}>

                  <Select
                    labelId={ `filter-${ key }-label` }
                    id={`filter-${ key }`}
                    value={ activeFilters[key] || '' }
                    label={ key }
                    displayEmpty
                    onChange={ event => {
                      setActiveFilters({
                        ...activeFilters,
                        [key]: event.target.value
                      })
                    } }
                  >

                    <MenuItem value={ 'all' }>
                      { label }
                    </MenuItem>

                    {
                      filters[key] &&
                      filters[key].map((label) => (
                        <MenuItem
                          key={ label }
                          value={ label }>
                          { label }
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              )
            })
          }
        </Box>

        <div>

          {
            Object.keys(filteredPositions).map(team => {
              return (
                <Box key={ team }>
                  <Typography 
                    variant="h4"
                    mt={ 8 }
                    mb={ 4 }>
                      { team }
                  </Typography>

                  {
                      filteredPositions[team].map(position => (
                        <OpenPositionListItem
                          position={ position }
                        />
                      ))
                    }
                </Box>
              )

            })
          }
        </div>
    </>
  )
}