import React from 'react'

interface DayTimeState {
    time: string
}

class DayTime extends React.Component<{}, DayTimeState> {
    constructor(props: any) {
        super(props)

        this.state = {
            time: ''
        }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            time: new Date().toLocaleString()
        }) 
      }, 1000);
    }

    render() {

        const d = new Date();
        const weekday = new Array(7);
        weekday[1] = "Måndag";
        weekday[2] = "Tisdag";
        weekday[3] = "Onsdag";
        weekday[4] = "Torsdag";
        weekday[5] = "Fredag";
        weekday[6] = "Lördag";
        weekday[7] = "Söndag";

        const n = weekday[d.getDay()];

        const styles = {
            backgroundColor: "rgb(27, 112, 137)",
            paddingTop: "15px"
        }

        return(
            <div className="daytime">
                <h5><span style={styles}> {`Att göra idag ${n} ${this.state.time}`} </span></h5>
            </div>
        )
    }
}
export default DayTime