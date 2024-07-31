import React from 'react'
import "./Contactblog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const Contactblog = () => {
  return (
    <>
     <section className="accordian-sec">
        <div className="accordian-pic">
          <form className="contact-form">
            <div className="form-group">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <div className="form-control">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        <div className="accordian-txt">
          <h4>Address:</h4>
          <h2 className='accordian-heading'>98 West 21th Street, Suite 721 New York NY 10016</h2>
          <h4>PHONE:</h4>
          <h2 className='accordian-heading'>(+1) 435 3533</h2>
          <h4>EMAIL:</h4>
          <h2 className='accordian-heading'>info@yourdomain.com</h2>
        </div>
      </section>

    {/* <section className="accordian-sec">
    <div className="accordian-pic" >
        <form style={{ maxWidth: '600px', height:"50vh", margin: '0 auto', padding: '30px', border: '1px solid gray', borderRadius: '10px' }}>
            <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ flex: '0 0 48%' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                    <input type="text" id="name" name="name" style={{ width: '100%', padding: '25px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ flex: '0 0 48%' }}>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone</label>
                    <input type="text" id="phone" name="phone" style={{ width: '100%', padding: '25px', boxSizing: 'border-box' }} />
                </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                <input type="email" id="email" name="email" style={{borderRadius:10,border:"1px solid gray", width: '100%', padding: '20px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
                <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}></textarea>
            </div>
            <div>
                <button type="submit" style={{ display: 'block', width: '30%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
            </div>
        </form>
    </div>
    <div style={{marginTop:70}} className="accordian-txt" >
        <h4 style={{fontSize:20, color:"#65c0ba"}}>Address:</h4>
        <h2 style={{padding:0,width:"50vh", fontSize:28, fontWeight:800,marginTop:10}} className='accordian-heading'>98 West 21th Street, Suite 721 New York NY 10016</h2>
        <h4 style={{fontSize:20, marginTop:30, color:"#65c0ba"}}>PHONE::</h4>
        <h2 style={{padding:0,width:"50vh", fontSize:28, fontWeight:800,marginTop:10}} className='accordian-heading'>(+1) 435 3533</h2>
        <h4 style={{fontSize:20,marginTop:30, color:"#65c0ba"}}>EMAIL:</h4>
        <h2 style={{padding:0,width:"50vh",fontSize:28, fontWeight:800,marginTop:10}} className='accordian-heading'>info@yourdomain.com</h2>
    </div>
</section> */}



    {/* <section className="accordian-sec">
        <div className="accordian-pic" data-aos="slide-up">
        <form style={{ maxWidth: '600px', height:"50vh", margin: '0 auto', padding: '30px', border: '1px solid gray', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <div style={{ flex: '0 0 48%' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '25px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ flex: '0 0 48%' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone</label>
          <input type="text" id="phone" name="phone" style={{ width: '100%', padding: '25px', boxSizing: 'border-box' }} />
        </div>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
        <input type="email" id="email" name="email" style={{borderRadius:10,border:"1px solid gray", width: '100%', padding: '20px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
        <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}></textarea>
      </div>
      <div>
        <button type="submit" style={{ display: 'block', width: '30%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
      </div>
    </form>
        </div>
        <div style={{marginTop:70}} className="accordian-txt" data-aos="slide-up">
            <h4 style={{fontSize:20, color:"#65c0ba"}}>Address:</h4>
          <h2 style={{padding:0,width:"50vh", fontSize:28, fontWeight:800,marginTop:10}} className='accordian-heading'>98 West 21th Street, Suite 721 New York NY 10016</h2>
          <h4 style={{fontSize:20, marginTop:30, color:"#65c0ba"}}>PHONE::</h4>
          <h2 style={{padding:0,width:"50vh", fontSize:28, fontWeight:800,marginTop:10}} className='accordian-heading'>(+1) 435 3533</h2>
          <h4 style={{fontSize:20,marginTop:30, color:"#65c0ba"}}>EMAIL:</h4>
          <h2 style={{padding:0,width:"50vh",fontSize:28, fontWeight:800,marginTop:10}} className='accordian-heading'>info@yourdomain.com</h2>
          
          
        </div>
        
      </section> */}


      </>
   
  )
}

export default Contactblog