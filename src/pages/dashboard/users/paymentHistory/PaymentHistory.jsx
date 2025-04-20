import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import {useQuery} from '@tanstack/react-query';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const {data: paymentsHistory} = useQuery({
    queryKey: ['menuData'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user?.email}`);
      return res?.data;
    },
  });

  return (
    <div>
      <SectionTitle heading="Payment history" subHeading="At a Glance" />

      <div className="bg-slate-100 p-5">
        <h1 className="text-3xl font-medium mb-6">
          Total Payments : {paymentsHistory?.length}
        </h1>

        <div className="overflow-x-auto rounded-t-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>TransactionId</th>
                <th>Price</th>
                <th>Status</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentsHistory?.map((payment, idx) => (
                <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.transaction}</td>
                  <td>{payment.price} $</td>
                  <th>
                    <button className="btn btn-sm bg-indigo-400">
                      {payment.status}
                    </button>
                  </th>
                  <th>{payment.date}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
