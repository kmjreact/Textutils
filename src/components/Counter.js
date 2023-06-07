import React, {useState} from 'react'
// import './styles/Counter.module.css' 

function Counter() {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const handleClick = () =>{
        setCount(count + 1);
    }
    const handleClick2 = () =>{
        setCount(count + 2);
    }

    const handleClick3 = () =>{
        setCount(count + 3);
    }

    const handlereset = () =>{
        let coun = 0; 
        setCount(coun);
    }

    const handleClick4 = () =>{
        setCount2(count2 + 1);
    }
    const handleClick5 = () =>{
        setCount2(count2 + 2);
    }

    const handleClick6 = () =>{
        setCount2(count2 + 3);
    }
    const handlereset2 = () =>{
        let coun = 0; 
        setCount2(coun);
    }

    const winner = () =>{
        if (count2<count) {
            alert('Home is winner of the match');
        }
        else if(count,count2===0){
            alert('Pleasr play match first');
        }
        else{
            alert('Guest is winner of the match');
        }
    }
  return (
    <div className='container'>
        <div className='parent'>
            <div className='child'>
                <h1>HOME</h1>
                <div>
                    <h1 className='ctext'><span>{count<10?'00':'0' && count<100?'0':''}</span>{count}</h1>
                    {/* <h1 className='zshadow'>000</h1> */}
                    <button onClick={handleClick}>+1</button>
                    <button onClick={handleClick2}>+2</button>
                    <button onClick={handleClick3}>+3</button>
                    <button onClick={handlereset}>Reset</button>
                </div>
            </div>
            <div className='child'>
                <h1>GUEST</h1>
                <div>
                    <h1 className='ctext'><span>{count2<10?'00':'0' && count2<100?'0':''}</span>{count2}</h1>
                    <button onClick={handleClick4}>+1</button>
                    <button onClick={handleClick5}>+2</button>
                    <button onClick={handleClick6}>+3</button>
                    <button onClick={handlereset2}>Reset</button>
                    

                </div>

                
            </div>
            <br />
            <br />
                    <div>
                        <button id='winn'onClick={winner}>Find Winner</button>
                    </div>
        </div>
    </div>
  )
}

export default Counter
