<template>
    <el-button type="primary" @click="openAddDialog">新增权限</el-button>
    <el-form :model="query" inline>
      <el-form-item label="名称">
        <el-input v-model="query.name"></el-input>
      </el-form-item>
      <el-form-item label="分组">
        <el-input v-model="query.group"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryTableData">查询</el-button>
        <el-button @click="clearQuery">清空</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="margin-top: 20px;">
      <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="text" @click="openEditDialog(row)">编辑</el-button>
          <el-button type="text" @click="deleteData(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="分组">
          <el-input v-model="form.group"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="提示">
          <el-input v-model="form.tip"></el-input>
        </el-form-item>
        <el-form-item label="权重">
          <el-input v-model="form.weigh"></el-input>
        </el-form-item>
        <el-form-item label="父级ID">
          <el-input v-model="form.parent_id"></el-input>
        </el-form-item>
        <el-form-item label="是否有子级">
          <el-input v-model="form.has_child"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>


<!-- 表格展示 -->
<!-- <el-table :data="tableData" style="margin-top: 20px;">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="权限码"></el-table-column>
        <el-table-column prop="group" label="权限说明"></el-table-column>
        <el-table-column prop="title" label="访问地址"></el-table-column>
        <el-table-column prop="tip" label="权限"></el-table-column>
        <el-table-column prop="create_time" label="创建时间"></el-table-column>
        <el-table-column prop="update_time" label="更新时间"></el-table-column>
        <el-table-column prop="parent_id" label="父编号"></el-table-column>
        <el-table-column prop="has_child" label="1子权限0无子权限"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="text" @click="openEditDialog(row)">编辑</el-button>
            <el-button type="text" @click="row && deleteData(row.id)">删除</el-button>
          </template>
        </el-table-column>
</el-table> -->

    <!-- 分页 -->
    <el-pagination
      v-model="pagination.currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pagination.pageSize"
      layout="sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handlePageSizeChange"
      @current-change="handlePageChange"
    ></el-pagination>

</template> 


<script>

// 导入element-plus组件
import { ElTable, ElTableColumn, ElButton, ElInput } from 'element-plus';
import axios from 'axios';

export default {
  name: 'PermissionTable',
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
    ElInput
  },
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表格列
      columns: [
        { label: 'id', prop: 'id' },
        { label: 'name', prop: 'name' },
        { label: 'group', prop: 'group' },
        { label: 'title', prop: 'title' },
        { label: 'tip', prop: 'tip' },
        { label: 'weigh', prop: 'weigh' },
        { label: 'create_time', prop: 'create_time' },
        { label: 'update_time', prop: 'update_time' },
        { label: 'parent_id', prop: 'parent_id' },
        { label: 'has_child', prop: 'has_child' },
        { label: '操作', slotName: 'operate' }
      ],
      // 表格分页
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      // 查询条件
      query: {
        name: '',
        group: '',
        title: '',
        tip: '',
        weigh: '',
        parent_id: '',
        has_child: ''
      },
      // 新增/编辑表单
      form: {
        name: '',
        group: '',
        title: '',
        tip: '',
        weigh: '',
        parent_id: '',
        has_child: ''
      },
      // 新增/编辑表单对话框
      dialogVisible: true,
      // 新增/编辑表单标题
      dialogTitle: '',
      // 当前操作的数据id
      currentId: ''
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    // 获取表格数据
    getTableData() {
      axios.get('http://api.jqrjq.cn/api/permission/all').then(res => {
        this.tableData = res.data;
      });
    },
    // 查询表格数据
    queryTableData() {
      axios.get('http://api.jqrjq.cn/api/permission/colums', { params: this.query }).then(res => {
        this.tableData = res.data;
      });
    },
    // 打开新增表单对话框
    openAddDialog() {
      this.dialogTitle = '新增权限';
      this.dialogVisible = true;
    },
    // 打开编辑表单对话框
    openEditDialog(row) {
      this.dialogTitle = '编辑权限';
      this.currentId = row.id;
      this.form = Object.assign({}, row);
      this.dialogVisible = true;
    },
    // 关闭表单对话框
    closeDialog() {
      this.dialogVisible = false;
      this.form = {
        name: '',
        group: '',
        title: '',
        tip: '',
        weigh: '',
        parent_id: '',
        has_child: ''
      };
    },
    // 提交表单
    submitForm() {
      if (this.dialogTitle === '新增权限') {
        axios.post('http://api.jqrjq.cn/api/permission/add', this.form).then(res => {
          this.getTableData();
          this.closeDialog();
        });
      } else {
        axios.post('http://api.jqrjq.cn/api/permission/edit', Object.assign({}, this.form, { id: this.currentId })).then(res => {
          this.getTableData();
          this.closeDialog();
        });
      }
    },
    // 删除数据
    deleteData(row) {
      axios.get('http://api.jqrjq.cn/api/permission/delete', { params: { id: row.id } }).then(res => {
        this.getTableData();
      });
    },
    // 清空查询条件
    clearQuery() {
      this.query = {
        name: '',
        group: '',
        title: '',
        tip: '',
        weigh: '',
        parent_id: '',
        has_child: ''
      };
    },
    // 分页改变事件
    handlePageChange(page) {
      this.pagination.currentPage = page;
      this.getTableData();
    }
  }
};
</script>


