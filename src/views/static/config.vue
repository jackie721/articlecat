<template>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @cell-click="handleCellClick"
      >
        <!-- 列名 -->
        <el-table-column
          v-for="column in tableColumns"
          :key="column.prop"
          :prop="column.prop"
          :label="column.label"
        >
          <!-- 根据类型渲染不同的表单控件 -->
          <template v-if="column.type === 'string' || column.type === 'number'">
            <el-input v-model="editableData[column.prop]"></el-input>
          </template>
          <template v-else-if="column.type === 'radio'">
            <el-radio-group v-model="editableData[column.prop]">
              <el-radio v-for="(option, index) in column.options" :key="index" :label="option">{{ option }}</el-radio>
            </el-radio-group>
          </template>
          <template v-else-if="column.type === 'checkbox'">
            <el-checkbox-group v-model="editableData[column.prop]">
              <el-checkbox v-for="(option, index) in column.options" :key="index" :label="option">{{ option }}</el-checkbox>
            </el-checkbox-group>
          </template>
          <template v-else-if="column.type === 'switch'">
            <el-switch v-model="editableData[column.prop]" :active-value="1" :inactive-value="0"></el-switch>
          </template>
          <template v-else-if="column.type === 'textarea'">
            <el-input type="textarea" v-model="editableData[column.prop]"></el-input>
          </template>
          <template v-else-if="column.type === 'array'">
            <el-select v-model="editableData[column.prop]" multiple>
              <el-option v-for="(option, index) in column.options" :key="index" :label="option" :value="option"></el-option>
            </el-select>
          </template>
          <template v-else-if="column.type === 'datetime'">
            <el-date-picker v-model="editableData[column.prop]" type="datetime"></el-date-picker>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="saveData" type="primary">保存</el-button>
    </div>

        <!-- 表格展示 -->
    <el-table :data="tableData" style="margin-top: 80px;">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="变量名"></el-table-column>
      <el-table-column prop="group" label="分组"></el-table-column>
      <el-table-column prop="title" label="变量标题"></el-table-column>
      <el-table-column prop="tip" label="变量描述"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="value" label="变量值"></el-table-column>
      <el-table-column prop="content" label="字典数据"></el-table-column>
      <el-table-column prop="rule" label="验证规则"></el-table-column>
      <el-table-column prop="extend" label="拓展属性"></el-table-column>
      <el-table-column prop="allow_del" label="允许删除"></el-table-column>
      <el-table-column prop="weigh" label="权重"></el-table-column>
      
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="text" @click="row && deleteData(row.id)">删除</el-button>
          <el-button type="text" @click="row && editData(row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>



  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tableData: [], // 表格数据
        tableColumns: [
          // 列配置
          { prop: 'id', label: 'ID', type: 'number' },
          { prop: 'name', label: '变量名', type: 'string' },
          { prop: 'group', label: '分组', type: 'string' },
          { prop: 'title', label: '变量标题', type: 'string' },
          { prop: 'tip', label: '变量描述', type: 'string' },
          { prop: 'type', label: '类型', type: 'string' },
          { prop: 'value', label: '变量值', type: 'string' },
          { prop: 'content', label: '字典数据', type: 'string' },
          { prop: 'rule', label: '验证规则', type: 'string' },
          { prop: 'extend', label: '拓展属性', type: 'string' },
          { prop: 'allow_del', label: '允许删除', type: 'checkbox', options: ['是'] },
          { prop: 'weigh', label: '权重', type: 'number' }
        ],
        editableData: {} // 存储用户编辑的数据
      };
    },
    methods: {
      handleCellClick(row, column) {
        // 点击单元格时将数据存储到 editableData 中
        this.editableData[column.property] = row[column.property];
      },
      saveData() {
        // 发送保存数据的请求
        axios.post('http://api.jqrjq.cn/api/config/add', this.editableData)
          .then(response => {
            console.log(response.data); // 请求成功后的处理逻辑
          })
          .catch(error => {
            console.error(error); // 请求失败后的处理逻辑
          });
      },
      delData(id) {
      api.delete(`http://api.jqrjq.cn/api/config/del/{id}`).then(res => {
        if (res.data.code === 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        }
      })
    },
    editData() {
      api.put('http://api.jqrjq.cn/api/config/edit', this.form).then(res => {
        if (res.data.code === 200) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        }
      })
    },
    getOneData(id) {
      api.get(`http://api.jqrjq.cn/api/config/one/{id}`).then(res => {
        if (res.data.code === 200) {
          this.form = res.data.data
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        }
      })
    },
    postPageData() {
      api.post('http://api.jqrjq.cn/api/config/page', this.form).then(res => {
        if (res.data.code === 200) {
          this.$message({
            message: '查询成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        }
      })
    }


    }
  };
  </script>
  