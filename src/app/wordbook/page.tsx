"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import BasicTable from "../components/WordTable";
import WordTable from "../components/WordTable";

const categories: WordCategory[] = [
  { id: "1", name: "daily" },
  { id: "2", name: "academic" },
  { id: "3", name: "travel" },
];
const WordBook = () => {
  const [category, setCategory] = useState("1");
  const [words, setWords] = useState<Word[]>([]);
  const [inputs, setInputs] = useState<Word>({
    id: "",
    eng: "",
    jap: "",
    example: "",
  });

  const handleSelectChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(words);
    setWords((words) => [...words, inputs]);
  };
  return (
    <>
      <Stack spacing={2} sx={{ marginTop: 4 }}>
        <Card sx={{ height: 150, width: 800, margin: "0 auto", marginTop: 4 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                英単語登録
              </Typography>
            </Box>
            <form>
              <TextField
                type="text"
                name="eng"
                label="英単語"
                size="small"
                sx={{ marginRight: 2 }}
                onChange={handleInputChange}
              />
              <TextField
                type="text"
                name="ja"
                label="日本語訳"
                size="small"
                sx={{ marginRight: 2 }}
                onChange={handleInputChange}
              />

              <Select
                name="category"
                label="カテゴリ"
                value={category}
                sx={{ width: 150, maxWidth: 150, marginRight: 2 }}
                size="small"
                onChange={handleSelectChange}
              >
                {categories.map((category, index) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              <Button variant="contained" onClick={handleSubmit}>
                追加
              </Button>
            </form>
          </CardContent>
        </Card>
        <WordTable data={words} />
      </Stack>
    </>
  );
};

export default WordBook;
