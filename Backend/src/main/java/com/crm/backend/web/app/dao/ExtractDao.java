package com.crm.backend.web.app.dao;

import java.util.List;

import com.crm.backend.web.app.models.Extract;

public interface ExtractDao {
    void register(Extract extract);

    List<Extract> list();

    String deleteOrder(String id);

    void edit(Extract extract);
}
