import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div>
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          

          <div class="row">

<div>

   <div>
   
          <form action="https://formspree.io/impulse.fx@gmail.com" method="POST" id="contact">
            <div>
              <label>Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="text" name="_replyto" />
            </div>
            <div>
              <label>Comment:</label>
              <textarea name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        
          </div>
   
   <div id="message-warning"> Error boy</div>
   
<div id="message-success">
      <i class="fa fa-check"></i>Your message was sent, thank you!<br/>>
</div>

</div>

</div>
        </section>
        );
  }
}