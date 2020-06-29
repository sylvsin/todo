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
        weekday[0] = "Måndag";
        weekday[1] = "Tisdag";
        weekday[2] = "Onsdag";
        weekday[3] = "Torsdag";
        weekday[4] = "Fredag";
        weekday[5] = "Lördag";
        weekday[6] = "Söndag";

        const n = weekday[d.getDay()];

        const styles = {
            backgroundColor: "rgb(27, 112, 137)",
        }

        return(
            <div className="daytime">
                <h5><span style={styles}> {`Att göra idag ${n} ${this.state.time}`} </span> </h5>
            </div>
        )
    }
}
export default DayTime