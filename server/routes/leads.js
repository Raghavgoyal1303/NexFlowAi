import express from 'express';
import { supabase } from '../lib/supabase.js';

export const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, company, message } = req.body;

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([{ name, email, company, message, source: 'lead_form' }]);

    if (error) throw error;

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
