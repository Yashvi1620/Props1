
    function Colors(props) {
        const stylep = {
            color: props.name,
            padding: '0px',
            margin:'-20px',
            
          
        }
        return (
          <div className="main">
            <div className="card" style={{ backgroundColor: props.code }}>
              <div className="name">
                <h4>{props.name}</h4>
                <p  style={stylep} className="cname">{props.color}</p>
              </div>
            </div>
      
           
          </div>
        );
        }


export default Colors