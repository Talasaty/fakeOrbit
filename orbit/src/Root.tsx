// import * as React from 'react';
// import './App.css';

// https://github.com/rajeshpillai/youtube-react-components/blob/master/src/AppDragDropDemo.js

// export default class AppDragDropDemo extends React.Component {
//     state = {
//         tasks: [
//             {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
//             {name:"React", category:"wip", bgcolor:"pink"},
//             {name:"Vue", category:"complete", bgcolor:"skyblue"}
//           ]
//     }

//     onDragStart = (ev:any, id:any) => {
//         console.log('dragstart:',id);
//         ev.dataTransfer.setData("id", id);
//     }

//     onDragOver = (ev:any) => {
//         ev.preventDefault();
//     }

//     onDrop = (ev:any, cat:any) => {
//        let id = ev.dataTransfer.getData("id");
       
//        let tasks = this.state.tasks.filter((task) => {
//            if (task.name === id) {
//                task.category = cat;
//            }
//            return task;
//        });

//        this.setState({
//            ...this.state,
//            tasks
//        });
//     }

//     render() {
//         var tasks = {
//             wip: [],
//             complete: []
//         }

//         this.state.tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div key={t.name} 
//                     onDragStart={(e) => this.onDragStart(e, t.name)}
//                     draggable
//                     className="draggable"
//                     style={{backgroundColor: t.bgcolor}}
//                 >
//                     {t.name}
//                 </div>
//             );
//         });

//         return (
//             <div className="container-drag">
//                 <h2 className="header">DRAG & DROP DEMO</h2>
//                 <div className="wip"
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
//                     <span className="task-header">WIP</span>
//                     {tasks.wip}
//                 </div>
//                 <div className="droppable" 
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>this.onDrop(e, "complete")}>
//                      <span className="task-header">COMPLETED</span>
//                      segunda columna
//                      {tasks.complete}
//                 </div>


//             </div>
//         );
//     }
// }



import * as React from 'react'
import styled from 'styled-components'
import { Card } from './Components/Card'
import { Col } from './Components/Col'
import { Row } from './Components/Row'

const RootContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default class Root extends React.Component {
    state = {
        text1: 'Hola mundo',
        text2: '',
        data: [[{nombre: 'Juan',apellido: 'Mayorga'},{nombre: 'Luis',apellido: 'Navarrete'},{nombre: 'Ana',apellido: 'Fernandez'}],
                [{nombre: 'Noelia',apellido: 'Mayorga'},{nombre: 'Gabriel',apellido: 'Luque'},{nombre: 'Ivan',apellido: 'Rubio'}],
                [{nombre: 'Lidia',apellido: 'Cueto'},{nombre: 'Encarni',apellido: 'Vera'},{nombre: 'Ricardo',apellido: 'Florido'}]]
    }

    onDragOver = (ev: any) => {
        console.log('onDragOver: ',ev)
        ev.preventDefault();
    }
    onDrop = (ev: any, id: any) => {
        let iden = ev.dataTransfer.getData("id");
        this.setState({text1: this.state.text2})
        this.setState({text2: this.state.text1})
        console.log('iden: ', iden)
        console.log('onDrop e: ',ev, ' id: ', id)
    }
    onDragStart = (ev: any, id: any) => {
        console.log('onDragStart: ', ev, 'id: ', id)
        ev.dataTransfer.setData("id", id);
    }
    render(){
         // const col = [[0,0,0],[0],[0,0,0,0,0]]
        const data = this.state.data
        return(
            <RootContainer>
                {data.map((dataCol) => (
                    <Col key={Math.random()}>
                        {dataCol.map((dataCel) => (
                            <Row key={Math.random()} onDrop={(e: any)=>{this.onDrop(e, "wip")}} onDragOver={(e: any)=>this.onDragOver(e)}>
                                <div onDrop={(e)=>{this.onDrop(e, "wip")}} onDragOver={(e)=>this.onDragOver(e)} draggable>
                                    <Card>
                                        <p>{this.state.text1}</p>
                                        <p>{dataCel.nombre}</p>
                                    </Card>
                                </div>
                            </Row>
                        ))}
                    </Col>
                ))}
            </RootContainer>
        )
    }
}