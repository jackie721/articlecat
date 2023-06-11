<template>
    <div class="Main">
      <div class="title">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="分类">
            <el-input
              v-model="formInline.user"
              placeholder="请输入分类名称"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="onSubmit"
              >搜索</el-button
            >
            <el-button type="primary" @click="onAdd">添加分类</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="Body">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50" label="id"> </el-table-column>
          <el-table-column label="分类名称" width="180" property="address">
          </el-table-column>
          <el-table-column property="name" label="日期" width="120">
          </el-table-column>
          <el-table-column property="name" label="创建时间" width="120">
          </el-table-column>
          <el-table-column property="name" label="更新" width="120">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                >更新</el-button
              >
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                >导航</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
        formInline: {
          user: "",
          region: "",
        },
      };
    },
    methods: {
      onAdd() {},
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onSubmit() {
        console.log("submit!");
      },
    },
  };
  </script>
  
  <style scoped>
  .Main {
    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
  .title {
    height: 10%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-top: 20px;
    padding-left: 20px;
  }
  .Body {
    height: 90%;
    padding: 10px;
  }
  </style>