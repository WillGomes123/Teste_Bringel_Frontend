import React from 'react';
import api from '../Services/api';

const ReportPage = () => {
  const downloadCompletedReport = async () => {
    try {
      const response = await api.get('/reports/completed', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'completed_report.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert('Failed to download completed report');
    }
  };

  const downloadFailureReport = async () => {
    try {
      const response = await api.get('/reports/failures', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'failure_report.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert('Failed to download failure report');
    }
  };

  return (
    <div>
      <h1>Reports</h1>
      <button onClick={downloadCompletedReport}>Download Completed Report</button>
      <button onClick={downloadFailureReport}>Download Failure Report</button>
    </div>
  );
};

export default ReportPage;
