function BasicPlan({qmimi,download,VideoSupport,Sistemi}) {
    return(
          <div className="plan-card basic-plan">
           <div className="plan-header">
             <h2 className="plan-title">Basic Plan</h2>
             <p className="plan-subtitle">Perfect for getting started</p>
           </div>
           
           <div className="plan-price">
             <span className="price-amount">{qmimi}</span>
             <span className="price-period">/month</span>
           </div>
           
           <div className="plan-features">
             <div className="feature-item">
               <span className="feature-label">Downloads</span>
               <span className="feature-value">{download}</span>
             </div>
             <div className="feature-item">
               <span className="feature-label">Video Support</span>
               <span className="feature-value">{VideoSupport}</span>
             </div>
             <div className="feature-item">
               <span className="feature-label">System</span>
               <span className="feature-value">{Sistemi}</span>
             </div>
           </div>
           
           <button className="plan-button basic-button">Select Plan</button>
        </div>
    )
}

export default BasicPlan;