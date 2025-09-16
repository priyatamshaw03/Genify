import React, { useEffect, useState } from 'react';
import { Gem, Sparkles, Heart } from 'lucide-react';
import { Protect, useClerk } from '@clerk/clerk-react';
import CreationItem from '../components/CreationItem';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const { openUserProfile } = useClerk();

  const getDashboardData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get('/api/user/get-user-creations', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  // Calculate total likes
  const totalLikes = creations.reduce((acc, curr) => acc + curr.likes.length, 0);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations Card */}
        <div
          onClick={() => navigate('/ai/community')}
          className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 cursor-pointer"
        >
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-lg font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div
          onClick={openUserProfile}
          className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 cursor-pointer"
        >
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-lg font-semibold">
              <Protect plan="premium" fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
            <Gem className="w-5 text-white" />
          </div>
        </div>

        {/* New Total Likes Card */}
        <div
          onClick={() => navigate('/ai/community')}
          className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 cursor-pointer"
        >
          <div className="text-slate-600">
            <p className="text-sm">Total Likes</p>
            <h2 className="text-lg font-semibold">{totalLikes}</h2>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9A3C] to-[#FF573C] text-white flex justify-center items-center">
            <Heart className="w-5 text-white" />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-3/4">
          <div className="animate-spin rounded-full h-11 w-11 border-3 border-purple-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="mt-6 mb-4">Recent Creations</p>
          {creations.map((item) => (
            <CreationItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
