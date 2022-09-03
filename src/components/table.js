import React from 'react'
import { TableData } from './tableData';
import { Box } from '@mui/system';
import styles from '../styles_modules/table.module.css';

const Table = () => {
  
  
  return (
    <Box sx={{marginBottom:"5rem"}}  className='tablebg ' style={{backgroundColor:'black'}}>
      <Box  pt={10} className="pt-10">
        <div>
          <h2  className={styles.head}>
            KickSale Tier & Access to IMO
          </h2>
          <div className={styles.main}>
            <div className={styles.tab}>
              <div className={styles.tabin}>
                <div className={styles.tabinn}>
                  <div className={styles.tabinnn}>
                    <table className={styles.table}>
                      <thead >
                        <tr>
                          <th
                            scope="col"
                            className={styles.firstrow}
                          >
                            Access
                          </th>
                          <th
                            scope="col"
                            className={styles.col}
                          >
                            Tire
                          </th>
                          <th
                            scope="col"
                            className={styles.col}
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className={styles.col}
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className={styles.col}style={{border:'none'}}
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      {TableData.map((data, id) => {
                        return (
                          <tbody key={id}>
                            <tr >
                              <td className={styles.row}>{data.tHead}</td>
                              <td className={styles.row}>{data.tTire}</td>
                              <td className={styles.row}>
                                {data.tRequirement}
                              </td>
                              <td className={styles.row}>
                                {data.tAllocation}
                              </td>
                              <td className={styles.row} style={{borderRight:'none'}}>{data.tLottery} </td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default Table