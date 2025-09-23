import React, { useEffect } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import Swal from 'sweetalert2'
function Index() {
  useEffect(()=>{
    setTimeout(()=>{

      Swal.fire('Info', 'Make sure you logout before leaving this page', 'info');

    },1000)

  },[]);
  // Sample dashboard data
  const stats = [
    { title: 'Total Orders', value: '1,234', icon: 'bi-cart-check', color: 'primary' },
    { title: 'Revenue', value: '$45,678', icon: 'bi-currency-dollar', color: 'success' },
    { title: 'Products', value: '89', icon: 'bi-box-seam', color: 'info' },
    { title: 'Customers', value: '2,456', icon: 'bi-people', color: 'warning' }
  ]

  // const recentOrders = [
  //   { id: '#1234', customer: 'John Doe', amount: '$299.99', status: 'Completed' },
  //   { id: '#1235', customer: 'Jane Smith', amount: '$149.50', status: 'Pending' },
  //   { id: '#1236', customer: 'Bob Johnson', amount: '$89.99', status: 'Shipped' },
  //   { id: '#1237', customer: 'Alice Brown', amount: '$199.00', status: 'Completed' }
  // ]

  return (
    <AdminLayout pageTitle="Dashboard">
          {/* Stats Cards */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card ${stat.color}`}>
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Grid */}
          <div className="dashboard-grid">
            {/* Recent Orders */}
            {/* <div className="dashboard-card">
              <div className="card-header">
                <h3>Recent Orders</h3>
                <button className="btn btn-sm btn-outline-primary">View All</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index}>
                          <td>{order.id}</td>
                          <td>{order.customer}</td>
                          <td>{order.amount}</td>
                          <td>
                            <span className={`badge ${order.status === 'Completed' ? 'bg-success' : order.status === 'Pending' ? 'bg-warning' : 'bg-info'}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}

           
          </div>
    </AdminLayout>
  )
}

export default Index

// Dashboard-specific styles
const dashboardStyles = `
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
  }

  .stat-card.primary .stat-icon {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .stat-card.success .stat-icon {
    background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
  }

  .stat-card.info .stat-icon {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  }

  .stat-card.warning .stat-icon {
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  }

  .stat-content h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    color: #2c3e50;
  }

  .stat-content p {
    margin: 0;
    color: #6c757d;
    font-size: 0.9rem;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .dashboard-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .card-header {
    padding: 1.5rem;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-header h3 {
    margin: 0;
    color: #2c3e50;
    font-weight: 600;
  }

  .card-body {
    padding: 1.5rem;
  }

  .quick-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
    color: #6c757d;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .action-btn:hover {
    background: #e9ecef;
    border-color: #667eea;
    color: #667eea;
  }

  .action-btn i {
    font-size: 1.5rem;
  }

  .action-btn span {
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .dashboard-grid {
      grid-template-columns: 1fr;
    }

    .quick-actions {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 576px) {
    .stat-card {
      padding: 1rem;
    }

    .card-header,
    .card-body {
      padding: 1rem;
    }
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = dashboardStyles
  document.head.appendChild(styleSheet)
}
