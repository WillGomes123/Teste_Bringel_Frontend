import React, { useState, useEffect } from 'react';
import api from '../Services/api';

const DashboardPage = () => {
  const [materials, setMaterials] = useState([]);
  const [status, setStatus] = useState('Recebimento');

  useEffect(() => {
    const fetchMaterials = async () => {
      const response = await api.get('/materials');
      setMaterials(response.data);
    };

    fetchMaterials();
  }, []);

  const updateMaterialStatus = async (id) => {
    try {
      await api.patch(`/materials/${id}`, { status });
      alert('Material status updated');
    } catch (error) {
      alert('Failed to update material status');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            {material.name} - {material.status}
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Recebimento">Recebimento</option>
              <option value="Lavagem">Lavagem</option>
              <option value="Esterilização">Esterilização</option>
              <option value="Distribuição">Distribuição</option>
            </select>
            <button onClick={() => updateMaterialStatus(material.id)}>Update Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
