import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import data from './data';
import Header from './Header';
import Quiz from './Quiz';
import Quizb from './Quizb';
import VideoComponent from './VideoComponent';

export default function Main() {
  const [chooseTest, setChooseTest] = useState(1);
  return (
    <div className="main-div">
      <div className="header">
        <Header />
      </div>
      <div className="video-and-picture">
        <div className="h1-div">
          <h1 className="h1">
            Learn Complete Front-End Web Development Course
          </h1>
          <h2 className="h2">
            Learn Complete Front End Web Development with HTML5, CSS3, Bootstrap
            5, JavaScript, React JS
          </h2>
        </div>
        <div className="video">
          <VideoComponent />
        </div>
      </div>

      <div className="table">
        <Typography sx={{ color: 'black' }}>
          <h2 className="teacher">Choose your courses</h2>
        </Typography>
      </div>
      <div className="table">
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: '#000' }}>
              <TableRow>
                <TableCell>
                  <Typography sx={{ color: 'white' }}>
                    day of the week
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: 'white' }}>teacher</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: 'white' }}>time</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: 'white' }}>course</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{ bgcolor: '#800080' }}>
              {data.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    hover
                  >
                    <TableCell>
                      <Typography sx={{ color: 'white' }}>
                        {row.day_of_the_week}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography sx={{ color: 'white' }}>
                        {row.teacher}
                      </Typography>
                    </TableCell>

                    <TableCell
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      <Typography sx={{ color: 'white' }}>
                        {row.time}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography sx={{ color: 'white' }}>
                        {row.course}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="test">
        {chooseTest === 1 ? (
          <div className="quiz-div">
            <button
              className="next-test"
              onClick={() => setChooseTest(chooseTest + 1)}
            >
              Go to JavaScript Test
            </button>
            <Quiz />
          </div>
        ) : (
          <div className="quiz-div">
            <button className="next-test2" onClick={() => setChooseTest(1)}>
              Go to HTML/CSS Test
            </button>
            <Quizb />
          </div>
        )}
      </div>
      <div className="footer">
        <h2>Oleksii Piltenko Portfolio</h2>
      </div>
    </div>
  );
}
