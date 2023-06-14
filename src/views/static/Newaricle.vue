<template>
  <div class="articleCats">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
  <div class="title"><h1>文章分类</h1></div>
    <div class="flex-grow" />
    <el-menu-item index="1"  @click="gouser()">用户端</el-menu-item>
    <el-sub-menu index="2">
      <template #title>文章管理</template>
      <el-menu-item index="2-1" @click="gofenlei()">文章分类</el-menu-item>
      <el-menu-item index="2-2" @click="addTask()">文章列表</el-menu-item>
    </el-sub-menu>
  </el-menu>
    <!-- 工具 -->
    <div class="article-tools">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="ID查询">
          <el-input v-model="formInline.id" placeholder="请输入Id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"   @click="Find">查询</el-button>
          <el-button type="warning"  @click="toAdd">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="articleCats" stripe style="width: 100%" 
    :header-cell-style="{ textAlign: 'center' }"
    :cell-style="{ textAlign: 'center' }">
      <!-- 列定义 -->
      <el-table-column fixed prop="id" label="分类id"  sortable />
      <el-table-column prop="catName" label="类别名称"  />
      <el-table-column prop="createTime" label="创建时间"  />
      <el-table-column prop="updateTime" label="更新时间"  />
      <el-table-column fixed="right" label="操作" >
        <template #default="scope">
          <el-button type="primary" size="default" @click="toEdit(scope.row)" round
            >更新</el-button
          >
          <!-- 更新按钮 -->
          <el-button  type="danger" size="default" @click="del(scope.row.id)" round
            >删除</el-button
          >
          <el-button  type="success" size="default" @click="addTask()" round
            >导航</el-button
          >
          <!-- 删除按钮 -->
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="size"
      @current-change="pageChange"
    >
    </el-pagination> -->
  </div>

  <!-- articleCat编辑对话框 -->
  <el-dialog v-model="dialogFormVisible" title="文章分类编辑">
    <el-form :model="articleCat">
      <el-form-item label="类别名称" :label-width="formLabelWidth">
        <el-input v-model="articleCat.catName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="创建时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="articleCat.createTime"
          type="date"
          autocomplete="off"
          placeholder="选择日期"
        />
      </el-form-item>
      <el-form-item label="更新时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="articleCat.updateTime"
          type="date"
          autocomplete="off"
          placeholder="选择日期"
        />
      </el-form-item>
    </el-form>

    <!-- 对话框底部按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <!-- 取消按钮 -->
        <el-button type="primary" @click="save">保存</el-button>
        <!-- 保存按钮 -->
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import {
  ArticleCatPage,
  ArticleCatDelId,
  AddArticleCat,
  ArticleCatEdit,
  getOneArticleCat,
} from "../../http/articleCat4";
import { ElMessageBox, ElMessage } from "element-plus";
import { cloneDeep } from "lodash-es";

export default defineComponent({
  data() {
    return {
      value: "",
      current: 2,
      total: 100,
      size: 10,
      formInline: {},
      articleCats: [], // 数据
      page: {
        total: "100",
        current: 1,
        size: "10",
      }, // 分页数据
      dialogFormVisible: false, // 对话框是否可见
      articleCat: {
        catName: "",
        createTime: "",
        deleted: 0,
        id: 0,
        parentId: 0,
        showInNav: true,
        sortOrder: 0,
        updateTime: "",
      }, // 当前编辑对象
      formLabelWidth: 98, // 表单标签宽度
    };
  },
 
  created() {},
  mounted() {
    this.getArticleCatsPage(1); // 组件加载时获取第一页数据
  },
  methods: {
    gouser(){
      this.$router.push({
        path: '/Newaricle2'
      })
    },
    gofenlei(){
      this.$router.push({
        path: '/Newaricle'
      })

    },
    addTask() {
      this.$router.push({
        path: '/Newaricle1'
      })
    },
    changeOption(val){
     console.log("切换了",val); 
     this.$router.push(
        {
            path:"/"+val
        }
     )
    },
    pageChange(val) {
      console.log("113", val);
    },
    Find() {
      this.articleCats = [];
      getOneArticleCat(this.formInline.id).then((res) => {
        console.log("reszzzz", res.data);
        this.articleCats.push(res.data.articleCat);
      });
    },
    toEdit(articlecat) {
      this.dialogFormVisible = true; // 打开articleCat编辑对话框
      this.articleCat = cloneDeep(articlecat); // 深拷贝
    },
    getArticleCatsPage(current) {
      this.articleCats = [];
      const data = {
        current: this.current,
        size: this.size,
      };
      ArticleCatPage(data)
        .then((res) => {
          console.log("入参", data, res);
          const page = res.data.articleCats;
          this.articleCats = page; // 设置分类数据
          this.page = page; // 设置分页数据
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      this.getArticleCatsPage(current);
      this.page.current = current;
    },
    del(id) {
      ElMessageBox.confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          const params = {
            id: id,
          };
          ArticleCatDelId(params)
            .then((res) => {
              if (res.success) {
                const index = this.articleCats.findIndex(
                  (item) => item.id === id
                );
                this.articleCats.splice(index, 1); // 移除被删除的分类
                this.page.total--; // 总数减一
                if (this.articleCats.length === 0 && this.page.current > 1) {
                  this.currentchange(this.page.current - 1);
                } else {
                  this.getArticleCatsPage(this.page.current);
                }
              } else {
                console.log(res.msg);
                return false;
              }
            })
            .catch((err) => {});
        })
        .catch(() => {});
    },
    toAdd() {
      this.dialogFormVisible = true; // 打开articleCat编辑对话框
      this.resetArticleCat(); // 重置 articleCat 对象
    },
    save() {
      const articlecat = this.articleCat;
      if (articlecat.id == 0) {
        AddArticleCat(articlecat)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false; // 关闭articleCat编辑对话框
              this.getArticleCatsPage(this.page.current); // 刷新当前页数据
              ElMessage(res.msg);
              this.resetArticleCat(); // 重置 articleCat 对象
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("失败");
          });
      } else {
        ArticleCatEdit(articlecat)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false; // 关闭articleCat编辑对话框
              this.getArticleCatsPage(this.page.current); // 刷新当前页数据
              ElMessage(res.msg);
              this.resetArticleCat(); // 重置 articleCat 对象
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("失败");
          });
      }
    },
    resetArticleCat() {
      this.articleCat = {
        catName: "",
        createTime: "",
        deleted: 0,
        id: 0,
        parentId: 0,
        showInNav: true,
        sortOrder: 0,
        updateTime: "",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 5vw;
  color:#6495ED;
}

.article-tools{
 text-align: center;
 margin-top:5ch;
}

.flex-grow {
  flex-grow: 1;
}

</style>