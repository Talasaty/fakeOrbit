import * as React from 'react';
import './App.css';

// https://github.com/rajeshpillai/youtube-react-components/blob/master/src/AppDragDropDemo.js

export default class AppDragDropDemo extends React.Component {
    state = {
        tasks: [
            {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
            {name:"React", category:"wip", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev:any, id:any) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev:any) => {
        ev.preventDefault();
    }

    onDrop = (ev:any, cat:any) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart={(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style={{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </div>


            </div>
        );
    }
}



// import * as React from 'react'
// import styled from 'styled-components'
// import { Card } from './Components/Card'
// import { Col } from './Components/Col'
// import { Row } from './Components/Row'

// const RootContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap;
// `

// export default class Root extends React.Component {
//     onDragOver = (e: any) => {
//         console.log('onDragOver: ',e)
//     }
//     onDrop = (e: any, id: any) => {
//         console.log('onDrop e: ',e, ' id: ', id)
//     }
//     onDragStart = (e: any, name: any) => {
//         console.log('onDragStart: ', e, 'name: ', name)
//     }
//     render(){
//         const col = [[0,0,0],[0],[0,0,0,0,0]]
//         // const row = [0,0]
//         return(
//             <RootContainer>
//                 {col.map((dataCol) => (
//                     <Col key={Math.random()} onDragStart={(e: any) => this.onDragStart(e, "name")}>
//                         {dataCol.map(() => (
//                             <Row key={Math.random()} onDragOver={(e: any)=>this.onDragOver(e)} onDrop={(e: any)=>{this.onDrop(e, "wip")}}>
//                                 <div draggable>
//                                 <Card>
//                                     Hola Mundo
//                                 </Card>
//                                 </div>
                                
//                             </Row>
//                         ))}
//                     </Col>
//                 ))}
//             </RootContainer>
//         )
//     }
// }