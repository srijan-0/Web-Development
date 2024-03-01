package com.example.prj.service.impl;

import com.example.prj.entity.Item;
import com.example.prj.pojo.ItemPojo;
import com.example.prj.repository.ItemRepository;
import com.example.prj.service.ItemService;
import com.example.prj.util.ImageToBase64;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
//    private final String UPLOAD_DIRECTORY = new StringBuilder().append(System.getProperty("user.dir")).append("/canteen_mgmt/itemImage").toString();
    ImageToBase64 imageToBase64 = new ImageToBase64();
    private static final String UPLOAD_DIRECTORY = "C:\\Users\\ittra\\Downloads\\CanvasVista-main\\CanvasVista-main\\Backend\\suvam\\canteen_mgmt\\itemImage";

    public void saveItem(ItemPojo itemPojo) throws IOException {
        Item item = new Item();

        if (itemPojo.getId() != null) {
            item = itemRepository.findById(itemPojo.getId())
                    .orElseThrow(() -> new NoSuchElementException("No data found"));
        }

        item.setItemName(itemPojo.getItemName());
        item.setItemDescription(itemPojo.getItemDescription());
        item.setItemQuantity(itemPojo.getItemQuantity());
        item.setItemPerPrice(itemPojo.getItemPerPrice());

        if (itemPojo.getItemImage() != null && !itemPojo.getItemImage().isEmpty()) {
            MultipartFile imageFile = itemPojo.getItemImage();
            String originalFilename = imageFile.getOriginalFilename();
            if (originalFilename != null && !originalFilename.isEmpty()) {
                Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, originalFilename);
                Files.write(fileNameAndPath, imageFile.getBytes());
                item.setItemImage(originalFilename);
            }
        }

        itemRepository.save(item);
    }


//        if (itemPojo.getItemImage() != null) {
//            MultipartFile imageFile = itemPojo.getItemImage();
//            String originalFilename = imageFile.getOriginalFilename();
//            if (originalFilename != null && !originalFilename.isEmpty()) {
//                StringBuilder fileNames = new StringBuilder();
//                Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, originalFilename);
//                fileNames.append(originalFilename);
//                Files.write(fileNameAndPath, imageFile.getBytes());
//                item.setItemImage(originalFilename);
//            }
//        }
//
//        itemRepository.save(item);
//    }

    @Override
    public List<Item> findAll() {
        List<Item> items = itemRepository.findAll();
        items = items.stream().map(item -> {
            item.setItemImage(imageToBase64.getImageBase64("/itemImage/" + item.getItemImage()));
            return item;
        }).collect(Collectors.toList());
        return items;
    }

    @Override
    public Optional<Item> findById(Integer id) {
        return itemRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
           itemRepository.deleteById(id);
    }
}
