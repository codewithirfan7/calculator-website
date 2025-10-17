body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1c1f26, #323846);
  font-family: 'Poppins', sans-serif;
  color: #fff;
  margin: 0;
}

/* Calculator Box */
.calculator {
  background: #222831;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  width: 320px;
  text-align: center;
}

.calculator h2 {
  margin-bottom: 10px;
  letter-spacing: 1px;
}

/* Display */
#display {
  width: 90%;
  height: 50px;
  font-size: 22px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  text-align: right;
  padding-right: 10px;
  background-color: #393e46;
  color: #fff;
}

/* Buttons Grid */
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* Buttons Style */
.btn {
  background-color: #00adb5;
  color: #fff;
  font-size: 20px;
  padding: 15px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: #02c3d8;
}

/* Operator Buttons */
.operator {
  background-color: #f39c12;
}

.operator:hover {
  background-color: #f1c40f;
}

/* Equal Button */
.equal {
  grid-column: span 2;
  background-color: #4caf50;
}

.equal:hover {
  background-color: #66bb6a;
}
