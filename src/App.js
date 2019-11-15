import React, { useEffect } from 'react';
import { useForm } from './utils/useForm';
import { gsap } from 'gsap'
import './App.css';
import Card from './card/Card';
import { searchFor } from './utils/searchFor.js'

function App() {
  const users = [
    {
      name: "Patrick Lebsack",
      email: "patrick.leb@site.co",
      media: {
        image:
          "https://uploads.codesandbox.io/uploads/user/8f652309-3be4-4b57-bd70-c41009fa0205/CdFf-patrick.jpg",
        color: "#DD60AD"
      },
      payment_details: {
        amount: "$75,500",
        payments: "23",
        credits: "18"
      }
    },
    {
      name: "Chelsey Dietrich",
      email: "chels.dietrich@site.co",
      media: {
        image:
          "https://uploads.codesandbox.io/uploads/user/8f652309-3be4-4b57-bd70-c41009fa0205/TnxV-chelsey.jpg",
        color: "#2D6B8B"
      },
      payment_details: {
        amount: "$67,567",
        payments: "12",
        credits: "23"
      }
    },
    {
      name: "Glenna Reichert",
      email: "glenna.reichert@site.co",
      media: {
        image:
          "https://uploads.codesandbox.io/uploads/user/8f652309-3be4-4b57-bd70-c41009fa0205/S6hS-glenna.jpg",
        color: "#E86735"
      },
      payment_details: {
        amount: "$86,050",
        payments: "45",
        credits: "32"
      }
    },
    {
      name: "Chelsey Dietrich",
      email: "chels.dietrich@site.co",
      media: {
        image:
          "https://uploads.codesandbox.io/uploads/user/8f652309-3be4-4b57-bd70-c41009fa0205/TnxV-chelsey.jpg",
        color: "#2D6B8B"
      },
      payment_details: {
        amount: "$67,567",
        payments: "12",
        credits: "23"
      }
    },
    {
      name: "Glenna Reichert",
      email: "glenna.reichert@site.co",
      media: {
        image:
          "https://uploads.codesandbox.io/uploads/user/8f652309-3be4-4b57-bd70-c41009fa0205/S6hS-glenna.jpg",
        color: "#E86735"
      },
      payment_details: {
        amount: "$86,050",
        payments: "45",
        credits: "32"
      }
    },
    {
      name: "Patrick Lebsack",
      email: "patrick.leb@site.co",
      media: {
        image:
          "https://uploads.codesandbox.io/uploads/user/8f652309-3be4-4b57-bd70-c41009fa0205/CdFf-patrick.jpg",
        color: "#DD60AD"
      },
      payment_details: {
        amount: "$75,500",
        payments: "23",
        credits: "18"
      }
    }
  ]
  const [values, handleInput] = useForm({ search: '' })
  useEffect(() => { // initial set in card.css to opacity: 0, y:20px
    gsap.to("#stagger-in", { delay: .2, opacity: 1, y: '0px', duration: .5, stagger: 0.17 })
  }, [users])
  return (
    <div className="App">
      <div className='header'></div>
      <div className='body-container'>
        <div className='page-title'>Search Users</div>
        <div className='controls-container'>
          <input className='search-bar shadow' name='search' placeholder='Search By Name'
            value={values.search}
            onChange={handleInput} >
          </input>
          <div className='filters-container'>
            <div className='filters-label black'>Sort By:</div>
            <div className='filters-box shadow controls-text'>Payments: Lowest to Highest</div>
          </div>
        </div>
        <div className='card-container'>
          {users.filter(searchFor(values.search)).map((i, index) =>
            <Card
              key={index}
              name={i.name}
              email={i.email}
              color={i.media.color}
              info={i.payment_details}
            />)}
        </div>
      </div>
    </div>
  );
}

export default App;
