/*await the lucky draw results

Create a getResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players: Tina, Jorge, Julien

Log out the resolved value for each promise and handle any promise rejections.
*/
function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  async function getResults() {
      try {
          player1 = await luckyDraw("Tina");
          player2 = await luckyDraw("Jorge");
          player3 = await luckyDraw("Julien");
          console.log(player1, player2, player3);
      } catch (error) {
          console.error(error);
      }
  }
  getResults();